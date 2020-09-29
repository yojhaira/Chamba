import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class HelperService {

    constructor() { }

    public cleanCharacters(input: string): string {

        let acentos = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç ";
        let original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc-";
        for (var i = 0; i < acentos.length; i++) {
            input = input.replace(acentos.charAt(i), original.charAt(i)).toLowerCase();
        }

        return input;
    }
}