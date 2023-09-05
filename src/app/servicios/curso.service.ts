import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from '../modelos/curso';
@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private url:string='http://localhost:8090/curso/'
  private http=new HttpHeaders({'Content-Type':'application/json'})
  constructor(private httpclient:HttpClient) {}

  listarCurso():Observable<Curso[]>{
    return this.httpclient.get<Curso[]>(this.url +'list').pipe(map(response=>response as Curso[]));
  }
  registrarCurso(curso:Curso):Observable<Curso>{
    return this.httpclient.post<Curso>(this.url+'create' , curso,{headers:this.http});
  }
}

