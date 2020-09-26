import { Component, OnInit, OnDestroy } from '@angular/core';

import { JobService } from '../../../services/job-categories/job-categories.service';
import { CTALoginService } from 'src/app/components/cta-login/cta-login.service';
import { QuoteDialogService } from 'src/app/components/quote-dialog/quote-dialog.service';
import { Subscription } from 'rxjs';
import { DistritoService } from '../../../services/location/distrito.service';
import { HelperService } from 'src/app/@core/services/helper.service';

@Component({
    selector: 'main-content',
    templateUrl: './main-content.template.html',
    styleUrls: ['./main-content.template.scss'],
    providers: [JobService, DistritoService]
})

export class MainContentTemplate implements OnInit, OnDestroy {

    public oficios: Array<any>;
    public arrayCategoriesMain: Array<any>;
    public distritos: Array<any>;
    public orientationCTA: string;
    public categoriesSubcription: Subscription;

    public stateDialog: boolean;

    constructor(
        public _helper: HelperService,
        public _jobService: JobService,
        public _quoteDialogService: QuoteDialogService,
        public _distritoService: DistritoService,
        public _ctaLoginService: CTALoginService
    ) { }

    ngOnInit() {
        //this.listCategories();
        this.orientationCTA = "left";
        this.showCategoriesMain();
        this.showDistritosMain();
    }

    public ngOnDestroy(): void {
        if(this.categoriesSubcription) {
            this.categoriesSubcription.unsubscribe();
        }
    }
    
    public showCategoriesMain() {
        this.categoriesSubcription = this._jobService.listCategoriesWorkers().subscribe(res => {
            console.table(res.response);
            const dataResponse = JSON.parse(JSON.stringify(res));
            this.arrayCategoriesMain = dataResponse.response;
        });
        
    }
    

    public showDistritosMain(){
        this._distritoService.listar().subscribe(
            result => {
                console.log(result);
                const dataResponse  = JSON.parse(JSON.stringify(result))
                this.distritos = dataResponse.response;
            },
            error => {
                console.log(error);
            }
        )
    }

    public quoteWork(): void {
        this._ctaLoginService.open();
    }

    public toggleQuoteDialog(): void {
        this._quoteDialogService.openDialog();
    }

}