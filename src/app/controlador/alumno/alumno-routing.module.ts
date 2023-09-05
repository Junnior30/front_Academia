import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './alumno.component';
import { ListarAlumnoComponent } from './listaralumno/listaralumno.component';
import { GuardarAlumnoComponent } from './guardaralumno/guardaralumno.component';
const routes: Routes = [
  {
    path: 'alumno',
    component: AlumnoComponent
  },
  {
    path:'list',
    component:ListarAlumnoComponent
  },
  {
    path:'create',
    component:GuardarAlumnoComponent
  },
  {
    path:'search/:idA',
    component:GuardarAlumnoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
