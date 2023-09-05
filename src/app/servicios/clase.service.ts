import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Clase } from '../modelos/clase';
@Injectable({
  providedIn: 'root'
})
export class ClaseService {
  private url:string='http://localhost:8090/clase/'
  private http=new HttpHeaders({'Content-Type':'application/json'})
  constructor(private httpclient:HttpClient) { }

  listarClase():Observable<Clase[]>{
    return this.httpclient.get<Clase[]>(this.url +'list').pipe(map(response=>response as Clase[]));
  }
  registrarClase(clase:Clase):Observable<Clase>{
    return this.httpclient.post<Clase>(this.url+'create' , clase,{headers:this.http});
  }
  update(clase: Clase): Observable<Clase>{
    return this.httpclient.put<Clase>(
      `${this.url+'update'}/${clase.idCLAS}`
    ,clase,{headers: this.http})
  }
}
