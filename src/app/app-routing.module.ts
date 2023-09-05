import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListardistritoComponent } from './controlador/distrito/listardistrito/listardistrito.component';
import { DashboardComponent } from './controlador/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard',pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path:'listarDistrito',component:ListardistritoComponent},
  {
    path:'inscripcion',
    loadChildren: () => import('./controlador/inscripcion/inscripcion.module').then(m =>m.InscripcionModule)
  },
  {
    path:'representante',
    loadChildren: () => import('./controlador/representante/representante.module').then(m =>m.RepresentanteModule)
  },
  {
    path:'alumno',
    loadChildren: () => import('./controlador/alumno/alumno.module').then(m =>m.AlumnoModule)
  },
  {
    path:'proyecto',
    loadChildren:() => import('./controlador/proyecto/proyecto.module').then(m => m.ProyectoModule)
  },
  {
    path:'clase',
    loadChildren:() => import('./controlador/clase/clase.module').then(m => m.ClaseModule)
  },
 {
  path:'empleado',
  loadChildren:() => import('./controlador/empleado/empleado.module').then(m => m.EmpleadoModule)

 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
