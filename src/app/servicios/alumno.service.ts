import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Alumno } from '../modelos/alumno';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private url:string='http://localhost:8090/alumno/'
  private http=new HttpHeaders({'Content-Type':'application/json'})
  constructor(private httpclient:HttpClient) {

  }
  listarAlumno():Observable<Alumno[]>{
    return this.httpclient.get<Alumno[]>(this.url +'list').pipe(map(response=>response as Alumno[]));
  }
  registrarAlumno(alumno:Alumno):Observable<Alumno>{
    return this.httpclient.post<Alumno>(this.url+'create', alumno,{headers:this.http});
  }
  //obtiene los datos de un alumno
  getAlumno(idA:number): Observable<Alumno>{
    return this.httpclient.get<Alumno>(`${this.url+'search'}/${idA}`);
  }
  update(alumno: Alumno): Observable<Alumno>{
    return this.httpclient.put<Alumno>(
      `${this.url+'update'}/${alumno.idA}`
    ,alumno,{headers: this.http})
  }
  delete(idA: number): Observable<Alumno>{
    return this.httpclient.delete<Alumno>(
      `${this.url+'delete'}/${idA}`,
      {headers: this.http})
  }
}