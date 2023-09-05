import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaseComponent } from './clase.component';
import { GuardarClaseComponent } from './guardarclase/guardarclase.component';
import { ListarClaseComponent } from './listarclase/listarclase.component';

const routes: Routes = [
  {
    path: 'clase',
    component: ClaseComponent
  },
  {
    path:'list',
    component:ListarClaseComponent
  },
  {
    path:'create',
    component:GuardarClaseComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaseRoutingModule { }
