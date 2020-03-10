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
    return this._http.get('http://chamba-back.test/api/oficio');
  }
}
