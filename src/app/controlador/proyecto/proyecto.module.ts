import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoRoutingModule } from './proyecto-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProyectoComponent } from './proyecto.component';
import { ListarProyectoComponent } from './listarproyecto/listarproyecto.component';
import { GuardarProyectoComponent } from './guardarproyecto/guardarproyecto.component';



@NgModule({
  declarations: [
    ProyectoComponent,
    ListarProyectoComponent,
    GuardarProyectoComponent
  ],
  imports: [
    CommonModule,
    ProyectoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProyectoModule { }
