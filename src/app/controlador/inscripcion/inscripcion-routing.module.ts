import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardarinscripcionComponent } from './guardarinscripcion/guardarinscripcion.component';
import { InscripcionComponent } from './inscripcion.component';
import { ListarinscripcionComponent } from './listarinscripcion/listarinscripcion.component';

const routes: Routes = [

  {
    path: 'inscripcion',
    component: InscripcionComponent
  },
  {
    path: 'list',
    component: ListarinscripcionComponent
  },
  {
    path: 'create',
    component: GuardarinscripcionComponent
  },
  {
    path: 'search/:idI',
    component: GuardarinscripcionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionRoutingModule { }
