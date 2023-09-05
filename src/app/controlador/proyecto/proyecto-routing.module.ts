import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardarProyectoComponent } from './guardarproyecto/guardarproyecto.component';
import { ListarProyectoComponent } from './listarproyecto/listarproyecto.component';

import { ProyectoComponent } from './proyecto.component';

const routes: Routes = [
  {
    path: 'proyecto',
    component: ProyectoComponent
  },
  {
    path:'list',
    component: ListarProyectoComponent
  },
  {
    path:'create',
    component: GuardarProyectoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectoRoutingModule { }
