import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor(
    public _http:HttpClient
  ) { }
  listar(id:number):Observable<any>{
    return this._http.get('http://chamba-back.test/api/categoria/'+id);
  }
}
