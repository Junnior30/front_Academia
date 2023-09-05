import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoRoutingModule } from './empleado-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpleadoComponent } from './empleado.component';
import { ListarEmpleadoComponent } from './listarempleado/listarempleado.component';
import { GuardarEmpleadoComponent } from './guardarempleado/guardarempleado.component';

@NgModule({
  declarations: [
  EmpleadoComponent,
  ListarEmpleadoComponent,
  GuardarEmpleadoComponent
  ],
  imports: [
    CommonModule,
    EmpleadoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmpleadoModule { }
