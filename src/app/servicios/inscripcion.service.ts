import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Inscripcion } from '../modelos/inscripcion';
@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  private url:string='http://localhost:8090/inscripcion/'
  private http=new HttpHeaders({'Content-Type':'application/json'})
    constructor(private httpclient:HttpClient) {
  
    }
    listarInscripcion():Observable<Inscripcion[]>{
      return this.httpclient.get<Inscripcion[]>(this.url +'list').pipe(map(response=>response as Inscripcion[]));
    }
    registrarInscripcion(inscripcion:Inscripcion):Observable<Inscripcion>{
      return this.httpclient.post<Inscripcion>(this.url+'create' , inscripcion,{headers:this.http});
    }
    getInscripcion(idI:number): Observable<Inscripcion>{
      return this.httpclient.get<Inscripcion>(`${this.url+'search'}/${idI}`);
    }
    update(inscripcion: Inscripcion): Observable<Inscripcion>{
      return this.httpclient.put<Inscripcion>(
        `${this.url+'update'}/${inscripcion.idI}`
      ,inscripcion,{headers: this.http})
    }
    delete(idI: number): Observable<Inscripcion>{
      return this.httpclient.delete<Inscripcion>(
        `${this.url+'delete'}/${idI}`,
        {headers: this.http})
    }
  
}
