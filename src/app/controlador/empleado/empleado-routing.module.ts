import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './empleado.component';
import { GuardarEmpleadoComponent } from './guardarempleado/guardarempleado.component';
import { ListarEmpleadoComponent } from './listarempleado/listarempleado.component';

const routes: Routes = [

  {
    path: 'empleado',
    component: EmpleadoComponent
  },
  {
    path:'list',
    component:ListarEmpleadoComponent
  },
  {
    path:'create',
    component:GuardarEmpleadoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoRoutingModule { }
