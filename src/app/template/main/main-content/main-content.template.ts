import { Component, OnInit } from '@angular/core';

import { JobService } from '../../../services/job-categories/job-categories.service';
import { CTALoginService } from 'src/app/components/cta-login/cta-login.service';
import { QuoteDialogService } from 'src/app/components/quote-dialog/quote-dialog.service';

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

    public stateDialog: boolean;

    constructor(
        public _jobService: JobService,
        public _ctaLoginService: CTALoginService,
        public _quoteDialogService: QuoteDialogService
    ) { }

    ngOnInit() {
        this.listCategories();
        this.orientationCTA = "left";
    }

    public listCategories(): void {
        this.arrayCategories = this._jobService.listCategoriesWorkers();
    }

    public quoteWork(): void {
        this._ctaLoginService.open();
    }

    public toggleQuoteDialog(): void {
        this._quoteDialogService.openDialog();
    }

}