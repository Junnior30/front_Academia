import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuardardistritoComponent } from './controlador/distrito/guardardistrito/guardardistrito.component';
import { ListardistritoComponent } from './controlador/distrito/listardistrito/listardistrito.component';
import { BarralateralComponent } from './controlador/barralateral/barralateral.component';
import { BodyComponent } from './controlador/body/body.component';
import { DashboardComponent } from './controlador/dashboard/dashboard.component';
import { SublevelMenuComponent } from './controlador/barralateral/sublevel-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    GuardardistritoComponent,
    ListardistritoComponent,
    BarralateralComponent,
    BodyComponent,
    DashboardComponent,
    SublevelMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
