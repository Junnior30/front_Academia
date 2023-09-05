import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AlumnoRoutingModule } from './alumno-routing.module';
import { AlumnoComponent } from './alumno.component';
import { GuardarAlumnoComponent } from './guardaralumno/guardaralumno.component';
import { ListarAlumnoComponent } from './listaralumno/listaralumno.component';

@NgModule({
  declarations: [
    AlumnoComponent,
    ListarAlumnoComponent,
    GuardarAlumnoComponent
  ],
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AlumnoModule { }
