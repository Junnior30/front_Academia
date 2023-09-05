import { Component, OnInit } from '@angular/core';
import { Clase } from 'src/app/modelos/clase';
import { ClaseService } from 'src/app/servicios/clase.service';

@Component({
  selector: 'app-listarclase',
  templateUrl: './listarclase.component.html',
  styleUrls: ['./listarclase.component.scss']
})
export class ListarClaseComponent implements OnInit {
  clases: Clase[]=[];
  constructor(private claseservicio:ClaseService) { }

  ngOnInit(): void {
    this.listarclase();
  }
  listarclase(): void{
    this.claseservicio.listarClase().subscribe(
      clases =>{this.clases = clases}
    );
  }
}
