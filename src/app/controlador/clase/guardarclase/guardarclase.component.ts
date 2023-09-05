import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Clase } from 'src/app/modelos/clase';
import { Curso } from 'src/app/modelos/curso';
import { Empleado } from 'src/app/modelos/empleado';
import { Proyecto } from 'src/app/modelos/proyecto';
import { ClaseService } from 'src/app/servicios/clase.service';
import { CursoService } from 'src/app/servicios/curso.service';
import { EmpleadoService } from 'src/app/servicios/empleado.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import swal1 from 'sweetalert';
@Component({
  selector: 'app-guardarclase',
  templateUrl: './guardarclase.component.html',
  styleUrls: ['./guardarclase.component.scss']
})
export class GuardarClaseComponent implements OnInit {
  clases:Clase = new Clase();
  empleados:Empleado[]=[];
  cursos:Curso[]=[];
  proyectos:Proyecto[]=[];
  claseForm : FormGroup;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private claseservicio:ClaseService,
    private empleadoservicio:EmpleadoService,
    private cursoservicio:CursoService,
    private proyectoservicio:ProyectoService
  ) { }

  ngOnInit(): void {
    this.listarCurso();
    this.listarEmpleado();
    this.listarProyecto();
    this.claseForm = new FormGroup({
      codigo_proyecto:
                      new FormControl(null,[Validators.required]),
      codigo_curso:
              new FormControl(null,[Validators.required]),
      fecha_inicio:
              new FormControl(null,[Validators.required]),
      fecha_fin:
            new FormControl(null,[Validators.required]),
      codigo_docente:
            new FormControl(null,[Validators.required]),
        
      estado:
            new FormControl(null,[Validators.required])
    })
  }
  onSubmit(){
    console.log(this.claseForm);
  }
  listarEmpleado(): void{
    this.empleadoservicio.listarEmpleado().subscribe(data=>{this.empleados=data})
  }
  listarCurso(): void{
    this.cursoservicio.listarCurso().subscribe(data=>{this.cursos=data})
  }
  listarProyecto(): void{
    this.proyectoservicio.listarProyecto().subscribe(data=>{this.proyectos=data})
  }

  salirUpdate(): void{
    this.goto("clase/list")
}
update(): void{
  this.claseservicio.update(this.clases).subscribe(
    Inscripcion =>{
      swal1('Clase Actualizada',
            `Clase ${this.clases.idCLAS} actualizado con éxito`,
            'success')
      this.goto("clase/list")
    }
  );
}
  public create(): void {
    this.claseservicio.registrarClase(this.clases).subscribe((Clase) => {
      swal1(
        'Nueva Clase',
        `Clase
     ${''} creada con exito`,
        'success'
      );
      this.goto('clase/list');
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
