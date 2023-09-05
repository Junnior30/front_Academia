import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaseRoutingModule } from './clase-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClaseComponent } from './clase.component';
import { ListarClaseComponent } from './listarclase/listarclase.component';
import { GuardarClaseComponent } from './guardarclase/guardarclase.component';


@NgModule({
  declarations: [
    ClaseComponent,
    ListarClaseComponent,
    GuardarClaseComponent
  ],
  imports: [
    CommonModule,
    ClaseRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClaseModule { }
