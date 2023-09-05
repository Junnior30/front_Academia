import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepresentanteComponent } from './representante.component';
import { ListarRepresentanteComponent } from './listarrepresentante/listarrepresentante.component';
import { GuardarRepresentanteComponent } from './guardarrepresentante/guardarrepresentante.component';
const routes: Routes = [

  {
    path: 'representante',
    component: RepresentanteComponent
  },
  {
    path: 'list',
    component: ListarRepresentanteComponent
  },
  {
    path: 'create',
    component: GuardarRepresentanteComponent
  },
  {
    path: 'search/:idR',
    component: GuardarRepresentanteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepresentanteRoutingModule { }
