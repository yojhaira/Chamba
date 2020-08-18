import { Component, OnInit, OnDestroy } from '@angular/core';

import { JobService } from '../../../services/job-categories/job-categories.service';
import { CTALoginComponent } from 'src/app/components/cta-login/cta-login.component';
import { CTALoginService } from 'src/app/components/cta-login/cta-login.service';
import { Subscription } from 'rxjs';


@Component({
    selector: 'main-content',
    templateUrl: './main-content.template.html',
    styleUrls: ['./main-content.template.scss'],
    providers: [JobService]
})

export class MainContentTemplate implements OnInit, OnDestroy {

    public oficios: Array<any>;
    public arrayCategoriesMain: Array<any>;
    public orientationCTA: string;
    public categoriesSubcription: Subscription;

    constructor(
        public _jobService: JobService,
        public _ctaLoginService: CTALoginService
    ) { }

    ngOnInit() {

        this.orientationCTA = "left";
        this.showCategoriesMain();
    }

    public ngOnDestroy(): void {
        if(this.categoriesSubcription) {
            this.categoriesSubcription.unsubscribe();
        }
    }
    
    public showCategoriesMain() {
        this.categoriesSubcription = this._jobService.listCategoriesWorkers().subscribe(res => {
            const dataResponse = JSON.parse(JSON.stringify(res));
            this.arrayCategoriesMain = dataResponse.response;
        });

    }

    public quoteWork(): void {
        this._ctaLoginService.open();
    }

}