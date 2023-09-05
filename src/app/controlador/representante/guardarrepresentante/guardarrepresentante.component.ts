import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Representante } from 'src/app/modelos/representante';
import { RepresentanteService } from 'src/app/servicios/representante.service';
import swal1 from 'sweetalert';

@Component({
  selector: 'app-guardarrepresentante',
  templateUrl: './guardarrepresentante.component.html',
  styleUrls: ['./guardarrepresentante.component.scss']
})
export class GuardarRepresentanteComponent implements OnInit {
  representantes:Representante= new Representante();
  representanteForm : FormGroup;
  constructor(private representanteservice:RepresentanteService,
              private activatedRoute: ActivatedRoute,
              private router: Router
    ) { }

  ngOnInit(): void {
    this.cargarRepresentante();

    this.representanteForm = new FormGroup({
      nombres:
              new FormControl(null,[Validators.required,
                                  Validators.maxLength(20), 
                                  Validators.minLength(3),
                                  Validators.pattern(/^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/)
                                  ]),
      apellidos:
                new FormControl(null,[Validators.required,
                                    Validators.maxLength(20),
                                    Validators.minLength(3),
                                    Validators.pattern(/^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/)
                                  ]),
      identificacion: new FormControl(null,[Validators.required,Validators.pattern(/^\d{8}(?:[-\s]\d{4})?$/)]),
      telefono: new FormControl(null,[Validators.required,Validators.pattern(/^\d{9}(?:[-\s]\d{4})?$/)]),
      direccion: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Za-z0-9\s]+$/g),Validators.maxLength(20)]),
      correo: new FormControl(null,[Validators.required, Validators.pattern(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g)])
    })

  }
  onSubmit(){
    console.log(this.representanteForm);
  }
  public cargarRepresentante(): void{
    this.activatedRoute.params.subscribe(
      params =>{let idR = params['idR']
    if(idR){ //si existe id
      this.representanteservice.getRepresentante(idR).subscribe((representante)=> this.representantes = representante)
    }
  })
  }
  update(): void{
    this.representanteservice.update(this.representantes).subscribe(
      Representante =>{
        swal1('Representante Actualizado',
              `Representante ${this.representantes.nombres} actualizado con éxito`,
              'success')
        this.goto("representante/list")
      }
    );
  }
  salirUpdate(): void{
    this.goto("representante/list")
}
  public create(): void {
    this.representanteservice.registrarRepresentante(this.representantes).subscribe((Representante) => {
      swal1(
        'Nuevo Representante',
        `Representante
     ${this.representantes.nombres} creado con exito`,
        'success'
      );
      this.goto('representante/list');
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
