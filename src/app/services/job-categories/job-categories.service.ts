import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class JobService {

    public collectionCategories: Array<any>;

    constructor(
        public _http: HttpClient
    ) {
        this.collectionCategories = [];
    }

    public listCategoriesWorkers() {
        return this._http.get('http://chamba-back.test/api/oficio');
    }

    public cleanCharacters(input: string): string {

        let acentos = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç";
        let original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc";
        for (var i = 0; i < acentos.length; i++) {
            input = input.replace(acentos.charAt(i), original.charAt(i)).toLowerCase();
        }

        return input;
    }
}
