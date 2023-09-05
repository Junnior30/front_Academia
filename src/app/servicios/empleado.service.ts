import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Empleado } from '../modelos/empleado';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private url:string='http://localhost:8090/empleado/'
  private http=new HttpHeaders({'Content-Type':'application/json'})
  constructor(private httpclient:HttpClient) {}

  listarEmpleado():Observable<Empleado[]>{
    return this.httpclient.get<Empleado[]>(this.url +'list').pipe(map(response=>response as Empleado[]));
  }
  registrarEmpleado(empleado:Empleado):Observable<Empleado>{
    return this.httpclient.post<Empleado>(this.url+'create' , empleado,{headers:this.http});
  }
}
