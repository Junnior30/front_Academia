import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Representante } from '../modelos/representante';
@Injectable({
  providedIn: 'root'
})
export class RepresentanteService {

  private url:string='http://localhost:8090/representante/'
private http=new HttpHeaders({'Content-Type':'application/json'})
  constructor(private httpclient:HttpClient) {
  }
  listarRepresentante():Observable<Representante[]>{
    return this.httpclient.get<Representante[]>(this.url +'list').pipe(map(response=>response as Representante[]));
  }
  registrarRepresentante(representante:Representante):Observable<Representante>{
    return this.httpclient.post<Representante>(this.url+'create' , representante,{headers:this.http});
  }
  getRepresentante(idR:number): Observable<Representante>{
    return this.httpclient.get<Representante>(`${this.url+'search'}/${idR}`);
  }
  update(representante: Representante): Observable<Representante>{
    return this.httpclient.put<Representante>(
      `${this.url+'update'}/${representante.idR}`
    ,representante,{headers: this.http})
  }
  delete(idR: number): Observable<Representante>{
    return this.httpclient.delete<Representante>(
      `${this.url+'delete'}/${idR}`,
      {headers: this.http})
  }
}
