import { Component,OnInit,Inject } from '@angular/core';
import { OficioService } from '../../../service/oficio.service';
import { WorkersService } from '../../../service/workers.service';

@Component({
    selector: 'categories',
    templateUrl: './categories.template.html',
    styleUrls: ['./categories.template.scss'],
    providers: [OficioService,WorkersService]
})

export class CategoriesTemplate implements OnInit{
    public oficios: Array <any>;
    public workers: Array<any>;
    public optionSelected: number = 0;
    public showSelected: number = 0;
    constructor(private sOficio:OficioService, private sWorkers:WorkersService){}

    ngOnInit() {
        this.listarOficios();
        this.capturar();
        //console.log(this.optionSelected);
    }

    listarOficios(){
        this.sOficio.listar().subscribe(
            result => {
                this.oficios = result.response;
                //console.log(this.oficios);
            },
            error => {
                console.log("ocurrio un error");
            }
        )
    }
    listarWorkers(id:number){
        this.sWorkers.listar(id).subscribe(
            result => {
                this.workers = result.response
            },
            error => {
                console.log("ocurrio un error")
            }
        )
    }
    capturar(){
        this.showSelected=this.optionSelected;
        this.listarWorkers(this.showSelected);
    }
}