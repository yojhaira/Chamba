import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { usuarioI } from '../models/usuario';
import { isNullOrUndefined } from 'util';
import { environment } from '../../environments/environment';

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
    return this._http.post(environment.apiUrl+'usuario/login',JSON.stringify(data),{headers:this.headers});
  }

  getCurrentUser(){
   let user =  localStorage.getItem('currentUser')
   if (!isNullOrUndefined(user)){
      return user;
   }else{
     return null;
   }
  }

  setUser(usuario:usuarioI){
    localStorage.setItem('currentUser',JSON.stringify(usuario));
  }

  logoutUser(){
    localStorage.removeItem('currentUser');
  }
}