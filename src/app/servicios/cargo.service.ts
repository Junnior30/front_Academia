import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Cargo_Emp } from '../modelos/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private url:string='http://localhost:8090/cargo_emp/'
  private http=new HttpHeaders({'Content-Type':'application/json'})
  constructor(private httpclient:HttpClient) {}

  listarCargo():Observable<Cargo_Emp[]>{
    return this.httpclient.get<Cargo_Emp[]>(this.url +'list').pipe(map(response=>response as Cargo_Emp[]));
  }
  registrarCargo(empleado:Cargo_Emp):Observable<Cargo_Emp>{
    return this.httpclient.post<Cargo_Emp>(this.url+'create' , empleado,{headers:this.http});
  }
}
