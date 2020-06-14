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
    ) { }

    public listCategoriesWorkers() {
        return this.collectionCategories = [
            {
                categoryID: 1,
                categoryName: "Jardinería",
                categoryIconName: "jardineria",
                categoryImageName: "jardineria"
            },
            {
                categoryID: 2,
                categoryName: "Pintores",
                categoryIconName: "pintores",
                categoryImageName: "pintores"
            },
            {
                categoryID: 3,
                categoryName: "Electricistas",
                categoryIconName: "electricistas",
                categoryImageName: "electricistas"
            },
            {
                categoryID: 4,
                categoryName: "Carpintería",
                categoryIconName: "carpinteria",
                categoryImageName: "carpinteria"
            },
            {
                categoryID: 5,
                categoryName: "Construcción",
                categoryIconName: "construccion",
                categoryImageName: "construccion"
            }
        ]
        // return this._http.get('http://chamba-back.test/api/oficio');
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
