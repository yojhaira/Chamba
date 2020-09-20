import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistritoService {

  constructor(
    public _http: HttpClient
  ) { }

  public listar()
  {
    console.log("listando");
    let url = environment.apiUrl+"distrito";
    return this._http.get(url);
  }
}
