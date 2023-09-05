import { Component, OnInit } from '@angular/core';
import { Inscripcion } from 'src/app/modelos/inscripcion';
import { InscripcionService } from 'src/app/servicios/inscripcion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listarinscripcion',
  templateUrl: './listarinscripcion.component.html',
  styleUrls: ['./listarinscripcion.component.scss']
})
export class ListarinscripcionComponent implements OnInit {

  inscripciones:Inscripcion[]=[]
  constructor(private inscripcionservicio:InscripcionService) { }

  ngOnInit(): void {
    this.listarinscripcion();
  }
  listarinscripcion(): void{
    this.inscripcionservicio.listarInscripcion().subscribe(data=>{this.inscripciones=data});
  }

  delete(inscripcion: Inscripcion): void{
    Swal.fire({
          title:'¿Está seguro?',
          text: `Seguro de Eliminar ${inscripcion.alumno.nombre}?`,
          icon:'warning',
          showCancelButton: true,
          confirmButtonText: 'Sí, Eliminar!',
          cancelButtonText: 'No, Cancelar!',
          reverseButtons: true
    })
    .then((result) => {
      if (result.value){
        this.inscripcionservicio.delete(inscripcion.idI as number).subscribe(response => {
          this.inscripciones = this.inscripciones.filter(In => In !== inscripcion)
          Swal.fire('Inscripción Eliminada',
          `Inscripcion ${inscripcion.alumno.nombre} eliminado con éxito`,
          'success'
          )
        })
      }

    })
  }


}
