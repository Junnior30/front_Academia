import { Component, OnInit } from '@angular/core';
import { Representante } from 'src/app/modelos/representante';
import { RepresentanteService } from 'src/app/servicios/representante.service';
import { RepresentanteComponent } from '../representante.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listarrepresentante',
  templateUrl: './listarrepresentante.component.html',
  styleUrls: ['./listarrepresentante.component.scss']
})
export class ListarRepresentanteComponent implements OnInit {

  representantes: Representante[]=[];
  constructor(private representanteservice: RepresentanteService) { }

  ngOnInit(): void {
    this.listarrepresentante();
  }

  listarrepresentante():void{
    this.representanteservice.listarRepresentante().subscribe(
      representantes =>{this.representantes = representantes}
    )
  }
   delete(representante: Representante): void{
    Swal.fire({
          title:'¿Está seguro?',
          text: `Seguro de Eliminar ${representante.nombres}?`,
          icon:'warning',
          showCancelButton: true,
          confirmButtonText: 'Sí, Eliminar!',
          cancelButtonText: 'No, Cancelar!',
          reverseButtons: true
    })
    .then((result) => {
      if (result.value){
        this.representanteservice.delete(representante.idR as number).subscribe(response => {
          this.representantes = this.representantes.filter(re => re !== representante)
          Swal.fire('Alumno Eliminado',
          `Representante ${representante.nombres} eliminado con éxito`,
          'success'
          )
        })
      }

    })
  }
}
