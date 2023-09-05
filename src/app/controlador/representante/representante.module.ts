import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ListarRepresentanteComponent } from './listarrepresentante/listarrepresentante.component';
import { GuardarRepresentanteComponent } from './guardarrepresentante/guardarrepresentante.component';
import { RepresentanteRoutingModule } from './representante-routing.module';
import { RepresentanteComponent } from './representante.component';


@NgModule({
  declarations: [
    RepresentanteComponent,
    ListarRepresentanteComponent,
    GuardarRepresentanteComponent
  ],
  imports: [
    CommonModule,
    RepresentanteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RepresentanteModule { }
