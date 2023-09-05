import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/modelos/empleado';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-listarempleado',
  templateUrl: './listarempleado.component.html',
  styleUrls: ['./listarempleado.component.scss']
})
export class ListarEmpleadoComponent implements OnInit {
  empleados: Empleado[]=[];
  constructor(private empleadoservice:EmpleadoService) { }

  ngOnInit(): void {
    this.listarempleado();
  }
  listarempleado(): void{
    this.empleadoservice.listarEmpleado().subscribe(
      empleados =>{this.empleados = empleados}
    );
  }
}
