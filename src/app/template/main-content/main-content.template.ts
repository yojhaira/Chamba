import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job-categories/job-categories.service';

@Component({
    selector: 'main-content',
    templateUrl: './main-content.template.html',
    styleUrls: ['./main-content.template.scss'],
    providers: [JobService]
})

export class MainContentTemplate implements OnInit {
    public oficios: Array <any>;
    public acentos:Array <any>
    constructor(private sOficio:JobService){

    }
    listarOficios(){
        this.sOficio.listCategoriesWorkers().subscribe(
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