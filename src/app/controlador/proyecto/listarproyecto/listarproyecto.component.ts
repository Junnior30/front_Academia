import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/modelos/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listarproyecto',
  templateUrl: './listarproyecto.component.html',
  styleUrls: ['./listarproyecto.component.scss']
})
export class ListarProyectoComponent implements OnInit {
  proyectos:Proyecto[]=[];
  constructor(private proyectoservicio:ProyectoService ) { }

  ngOnInit(): void {
    this.listarproyecto();
  }
  listarproyecto(): void{
    this.proyectoservicio.listarProyecto().subscribe(
      proyectos =>{this.proyectos = proyectos}
    );
  }
}
