import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { usuarioI } from '../models/usuario'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public _http:HttpClient
  ) { }
  
  headers:HttpHeaders= new HttpHeaders({
    "Content-Type":"application/json"
  });

  authUser(data:usuarioI): Observable<any>{
    return this._http.post('http://chamba-back.test/api/usuario/login',JSON.stringify(data),{headers:this.headers});
  }
}