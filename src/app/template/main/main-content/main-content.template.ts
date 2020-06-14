import { Component, OnInit } from '@angular/core';

import { JobService } from '../../../services/job-categories/job-categories.service';


@Component({
    selector: 'main-content',
    templateUrl: './main-content.template.html',
    styleUrls: ['./main-content.template.scss'],
    providers: [JobService]
})

export class MainContentTemplate implements OnInit {

    public oficios: Array<any>;

    constructor(public jobService: JobService) { }
    // listarOficios(){
    //     this.sOficio.listar().subscribe(
    //         result => {
    //             this.oficios = result.response;
    //         },
    //         error => {
    //             console.log("ocurrio un error");
    //         }
    //     )
    // }

    ngOnInit() {
        // this.listarOficios()
    }


}