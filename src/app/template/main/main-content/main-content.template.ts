import { Component, OnInit } from '@angular/core';

import { JobService } from '../../../services/job-categories/job-categories.service';
import { CTALoginComponent } from 'src/app/components/cta-login/cta-login.component';
import { CTALoginService } from 'src/app/components/cta-login/cta-login.service';


@Component({
    selector: 'main-content',
    templateUrl: './main-content.template.html',
    styleUrls: ['./main-content.template.scss'],
    providers: [JobService]
})

export class MainContentTemplate implements OnInit {

    public oficios: Array<any>;
    public arrayCategories: Array<any>;
    public orientationCTA: string;

    constructor(
        public _jobService: JobService,
        public _ctaLoginService: CTALoginService
    ) { }

    ngOnInit() {
        // this.listarOficios()
        this.listCategories();
        this.orientationCTA = "left";
    }

    public listCategories(): void {
        this.arrayCategories = this._jobService.listCategoriesWorkers();
    }
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

    public quoteWork(): void {
        this._ctaLoginService.open();
    }

}