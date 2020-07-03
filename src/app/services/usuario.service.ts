import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { usuarioI } from '../models/usuario'
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class UsuarioService {
  
    constructor(
      public _http:HttpClient
    ) { }

    headers:HttpHeaders= new HttpHeaders({
      "Content-Type":"application/json"
    });
  
    saveUser(data:usuarioI): Observable<any>{
      return this._http.post(environment.apiUrl +'usuario/create',JSON.stringify(data),{headers:this.headers});
    }
    //getUser, ta para ver porque no me va a funcionar :v
    getUser(id): Observable<any>{
      return this._http.get('http://chamba-back.test/api/usuario/{id}')
    }

    editUser(data:usuarioI): Observable<any>{
      return this._http.put('http://chamba-back.test/api/usuario/editar/{id}',JSON.stringify(data))
    }
  }