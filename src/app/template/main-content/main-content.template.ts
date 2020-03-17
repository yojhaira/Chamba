import { Component, OnInit } from '@angular/core';

import { OficioService } from '../../service/oficio.service';
    

@Component({
    selector: 'main-content',
    templateUrl: './main-content.template.html',
    styleUrls: ['./main-content.template.scss'],
    providers: [OficioService]
})

export class MainContentTemplate implements OnInit {
    public oficios: Array <any>;
    // public acentos:Array <any>
    constructor(private sOficio:OficioService){

    }
    listarOficios(){
        this.sOficio.listar().subscribe(
            result => {
                this.oficios = result.response;
            },
            error => {
                console.log("ocurrio un error");
            }
        )
    }

    filtrar_acentos(input: string): string{

        let acentos = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç";
        let original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc";
        for (var i = 0; i < acentos.length; i++) {
            input = input.replace(acentos.charAt(i), original.charAt(i)).toLowerCase();
        }

        return input;
   }

    ngOnInit() {
        this.listarOficios();
    }


}