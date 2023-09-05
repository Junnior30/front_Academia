import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';
import { AlumnoService } from 'src/app/servicios/alumno.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-listaralumno',
  templateUrl: './listaralumno.component.html',
  styleUrls: ['./listaralumno.component.scss']
})
export class ListarAlumnoComponent implements OnInit {

  alumnos:Alumno[]=[];
  constructor(private alumnoservicio:AlumnoService) { }

  ngOnInit(): void {
    this.listaralumno();
  }
  listaralumno(): void{
    this.alumnoservicio.listarAlumno().subscribe(
      alumnos =>{this.alumnos = alumnos}
    );
  }

  delete(alumno: Alumno): void{
    Swal.fire({
          title:'¿Está seguro?',
          text: `Seguro de Eliminar ${alumno.apellidoPat}?`,
          icon:'warning',
          showCancelButton: true,
          confirmButtonText: 'Sí, Eliminar!',
          cancelButtonText: 'No, Cancelar!',
          reverseButtons: true
    })
    .then((result) => {
      if (result.value){
        this.alumnoservicio.delete(alumno.idA as number).subscribe(response => {
          this.alumnos = this.alumnos.filter(al => al !== alumno)
          Swal.fire('Alumno Eliminado',
          `Alumno ${alumno.nombre} eliminado con éxito`,
          'success'
          )
        })
      }
    })
  }

}
