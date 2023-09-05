import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Alumno } from 'src/app/modelos/alumno';
import { Inscripcion } from 'src/app/modelos/inscripcion';
import { Proyecto } from 'src/app/modelos/proyecto';
import { AlumnoService } from 'src/app/servicios/alumno.service';
import { InscripcionService } from 'src/app/servicios/inscripcion.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import swal1 from 'sweetalert';

@Component({
  selector: 'app-guardarinscripcion',
  templateUrl: './guardarinscripcion.component.html',
  styleUrls: ['./guardarinscripcion.component.scss']
})
export class GuardarinscripcionComponent implements OnInit {

  inscripciones:Inscripcion = new Inscripcion();
  proyectos:Proyecto[]=[];
  alumnos:Alumno[]=[];
  inscripcionForm : FormGroup;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private inscripcionService: InscripcionService,
    private proyectoservice: ProyectoService,
    private alumnoservice: AlumnoService
  ) { }

  ngOnInit(): void {
    this.cargarInscripcion();
    this.listaralumno();
    this.listarproyecto();
    this.inscripcionForm = new FormGroup({
      codigo_alumno:
                      new FormControl(null,[Validators.required]),
      fecha:
              new FormControl(null,[Validators.required]),
      codigo_proyecto:
              new FormControl(null,[Validators.required]),
      costo:
            new FormControl(null,[Validators.required,Validators.pattern(/[^a-z ]\ *([.0-9])*\d/g)]),
      estado:
            new FormControl(null,[Validators.required])
    })
  }
  onSubmit(){
    console.log(this.inscripcionForm);
  }
  listaralumno(): void{
    this.alumnoservice.listarAlumno().subscribe(data=>{this.alumnos=data})
  }
  listarproyecto(): void{
    this.proyectoservice.listarProyecto().subscribe(data=>{this.proyectos=data})
  }
  public cargarInscripcion(): void{
    this.activatedRoute.params.subscribe(
      params =>{let idI = params['idI']
      if(idI) 
        {//si existe idA
        this.inscripcionService.getInscripcion(idI).subscribe((inscripcion)=> this.inscripciones = inscripcion)
        console.log("de nuevo funciono")
        }
  })
  }
  update(): void{
    this.inscripcionService.update(this.inscripciones).subscribe(
      Inscripcion =>{
        swal1('Inscripción Actualizada',
              `Inscripcion ${this.inscripciones.idI} actualizado con éxito`,
              'success')
        this.goto("inscripcion/list")
      }
    );
  }
  salirUpdate(): void{
        this.goto("inscripcion/list")
  }
  public create(): void {
    this.inscripcionService.registrarInscripcion(this.inscripciones).subscribe((Inscripcion) => {
      swal1(
        'Nueva Inscripción',
        `Inscripcion
     ${''} creada con exito`,
        'success'
      );
      this.goto('inscripcion/list');
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