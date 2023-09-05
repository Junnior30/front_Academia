import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Distrito } from '../modelos/distrito';
@Injectable({
  providedIn: 'root'
})
export class DistritoService {

  private url:string='http://localhost:8090/distrito/'
  private http=new HttpHeaders({'Content-Type':'application/json'})
    constructor(private httpclient:HttpClient) {
    }
    listarDistrito():Observable<Distrito[]>{
      return this.httpclient.get<Distrito[]>(this.url +'list').pipe(map(response=>response as Distrito[]));
    }
    registrarDistrito(distrito:Distrito):Observable<Distrito>{
      return this.httpclient.post<Distrito>(this.url+'create' , distrito,{headers:this.http});
    }
}
