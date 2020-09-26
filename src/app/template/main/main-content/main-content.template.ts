import { Component, OnInit } from '@angular/core';

import { JobService } from '../../../services/job-categories/job-categories.service';
import { CTALoginService } from 'src/app/@shared/components/cta-login/cta-login.service';
import { QuoteDialogService } from 'src/app/@shared/components/quote-dialog/quote-dialog.service';

import { OwlOptions } from 'ngx-owl-carousel-o';

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
    public customOptions: OwlOptions;
    public buttonOwlPrev: string;
    public buttonOwlNext: string;

    constructor(
        public _jobService: JobService,
        public _ctaLoginService: CTALoginService,
        public _quoteDialogService: QuoteDialogService
    ) { }

    ngOnInit() {
        this.listCategories();
        this.orientationCTA = "left";

        this.buttonOwlPrev = `<div class='button-content'>
            <div class='md-icon'>
                <i class="fas fa-chevron-left"></i>
            </div>
        </div>`;

        this.buttonOwlNext = `<div class='button-content'>
            <div class='md-icon'>
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>`;

        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            dots: false,
            navSpeed: 700,
            navText: [this.buttonOwlPrev, this.buttonOwlNext],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                580: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1080: {
                    items: 4
                }
            },
            nav: true
        }
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