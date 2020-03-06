import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OficioService {

  constructor(
    public _http:HttpClient
  ) { }

  listar(): Observable<any>{
    return this._http.get('http://127.0.0.1:8000/api/oficio');
  }
}
