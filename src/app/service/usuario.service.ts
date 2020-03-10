import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { usuarioI } from '../models/usuario'

@Injectable({
    providedIn: 'root'
  })
  export class UsuarioService {
  
    constructor(
      public _http:HttpClient
    ) { }
  
    saveUser(data:usuarioI): Observable<any>{
      return this._http.post('http://chamba-back.test/api/usuario/create',JSON.stringify(data));
    }
    //getUser, ta para ver porque no me va a funcionar :v
    getUser(id): Observable<any>{
      return this._http.get('http://chamba-back.test/api/usuario/{id}')
    }

    editUser(data:usuarioI): Observable<any>{
      return this._http.put('http://chamba-back.test/api/usuario/editar/{id}',JSON.stringify(data))
    }
  }