import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Proyecto } from '../modelos/proyecto';
@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private url:string='http://localhost:8090/proyecto/'
  private http=new HttpHeaders({'Content-Type':'application/json'})
  constructor(private httpclient:HttpClient) {}
  
  listarProyecto():Observable<Proyecto[]>{
    return this.httpclient.get<Proyecto[]>(this.url +'list').pipe(map(response=>response as Proyecto[]));
  }
  registrarProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.httpclient.post<Proyecto>(this.url+'create' , proyecto,{headers:this.http});
  }
}
