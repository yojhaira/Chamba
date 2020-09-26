import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { QuoteDialogService } from './quote-dialog.service';
import { transition, style, animate, trigger, state } from '@angular/animations';

@Component({
    selector: 'quote-dialog-component',
    templateUrl: './quote-dialog.component.html',
    styleUrls: ['./quote-dialog.component.scss'],
    animations: [
        trigger('dialog', [
            state('true', style({ transform: 'rotateX(0deg)', opacity: '1' })),
            state('false', style({ transform: 'rotateX(45deg)', opacity: '0' })),
            transition('true => false', animate('200ms ease-in-out')),
            transition('false => true', animate('200ms ease-in-out'))
        ])
    ]
})
export class QuoteDialogComponent implements OnInit {

    @ViewChild('stepFirst') public stepFirst: ElementRef;
    @ViewChild('stepSecond') public stepSecond: ElementRef;

    constructor(
        public _quoteDialogService: QuoteDialogService,
        private _renderer: Renderer2
    ) { }

    public closeQuoteDialog(): void {
        this._quoteDialogService.closeDialog();
    }

    public previousStep(): void {
        this._renderer.addClass(this.stepFirst.nativeElement, 'active-step');
        this._renderer.removeClass(this.stepSecond.nativeElement, 'active-step');
    }

    public nextStep(): void {
        this._renderer.removeClass(this.stepFirst.nativeElement, 'active-step');
        this._renderer.addClass(this.stepSecond.nativeElement, 'active-step');
    }

    ngOnInit(): void {

    }

}
