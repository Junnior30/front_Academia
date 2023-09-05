import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';
import { Alumno } from 'src/app/modelos/alumno';
import { Distrito } from 'src/app/modelos/distrito';
import { Representante } from 'src/app/modelos/representante';
import { AlumnoService} from 'src/app/servicios/alumno.service';
import { DistritoService } from 'src/app/servicios/distrito.service';
import { RepresentanteService } from 'src/app/servicios/representante.service';
import swal1 from 'sweetalert';

@Component({
  selector: 'app-guardaralumno',
  templateUrl: './guardaralumno.component.html',
  styleUrls: ['./guardaralumno.component.scss']
})
export class GuardarAlumnoComponent implements OnInit {

  alumnos:Alumno = new Alumno();
  distritos:Distrito[]=[]
  representantes:Representante[]=[]
  titulo: string = 'Crear Alumno';
  alumnoForm : FormGroup;
  
  constructor(

    private router: Router,
    private distritoservice: DistritoService,
    private representanteservice: RepresentanteService,
    private alumnoService: AlumnoService,
    private activatedRoute: ActivatedRoute)
    {};
    
  ngOnInit():void{
    this.cargarAlumno();
    this.listardistrito();
    this.listarrepresentante();
   this.alumnoForm = new FormGroup({
    nombre:
            new FormControl(null,[Validators.required,
                                Validators.maxLength(20), 
                                Validators.minLength(3),
                                Validators.pattern(/^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/)
                                ]
                                
                          ),
    apellidoPat:
                new FormControl(null,[Validators.required,
                                        Validators.maxLength(20), 
                                        Validators.minLength(3),
                                        Validators.pattern(/^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/)]
                                     ),
    apellidoMat:
                  new FormControl(null,[Validators.required,
                                        Validators.maxLength(20),
                                        Validators.minLength(3),
                                        Validators.pattern(/^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/)]
                                ),
    fechaN : new FormControl(null,Validators.required),
    identificacion:
                  new FormControl(null,
                                      [ Validators.required,
                                        Validators.pattern(/^\d{8}(?:[-\s]\d{4})?$/)]),
    colegio:
            new FormControl(null,[Validators.required,
                                   Validators.maxLength(30),
                                   Validators.minLength(3),
                                   Validators.pattern(/([^\w\d])+/g)]
                                   ),
    codigo_distrito: new FormControl(null,Validators.required),
    genero: new FormControl(null,Validators.required),
    codigo_representante: new FormControl(null, Validators.required)
   })
  }
  onSubmit(){
    console.log(this.alumnoForm);
  }
  salirUpdate(): void{
    this.goto("alumno/list")
}
  listarrepresentante(): void{
    this.representanteservice.listarRepresentante().subscribe(data=>{this.representantes=data})
  }
  listardistrito(): void{
    this.distritoservice.listarDistrito().subscribe(data=>{this.distritos=data})
  }
  public cargarAlumno(): void{
    this.activatedRoute.params.subscribe(
      params =>{let idA = params['idA']
    if(idA){ //si existe idA
      this.alumnoService.getAlumno(idA).subscribe((alumno)=> this.alumnos = alumno)
    }
  })
  }
  update(): void{
    this.alumnoService.update(this.alumnos).subscribe(
      Alumno =>{
        swal1('Alumno Actualizado',
              `Alumno ${this.alumnos.nombre} actualizado con éxito`,
              'success')
        this.goto("alumno/list")
      }
    );
  }



  public create(): void {
    this.alumnoService.registrarAlumno(this.alumnos).subscribe((Alumno) => {
      swal1(
        'Nuevo Alumno',
        `Alumno
     ${this.alumnos.nombre} creado con exito`,
        'success'
      );
      this.goto('alumno/list');
    });
  }
  public goto(url:any) {
    this.router.navigate([url]).then((e) => {
      if (e) {
        console.log('Navigation is succesful');
      } else {
        console.log('Navigation has failed!');
      }
    });
  }

}
