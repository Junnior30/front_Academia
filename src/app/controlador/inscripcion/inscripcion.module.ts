import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionRoutingModule } from './inscripcion-routing.module';
import { InscripcionComponent } from './inscripcion.component';
import { GuardarinscripcionComponent } from './guardarinscripcion/guardarinscripcion.component';
import { ListarinscripcionComponent } from './listarinscripcion/listarinscripcion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InscripcionComponent,
    GuardarinscripcionComponent,
    ListarinscripcionComponent
  ],
  imports: [
    CommonModule,
    InscripcionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InscripcionModule { }
