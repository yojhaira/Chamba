import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CTALoginService } from './cta-login.service';
import { Subscription } from 'rxjs';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
    selector: 'cta-login-component',
    templateUrl: './cta-login.component.html',
    styleUrls: ['./cta-login.component.scss'],
    animations: [
        trigger('dialog', [
            transition('void=>*', [
                style({
                    transform: 'scale3d(.3, .3, .3)'
                }),
                animate('0.1s ease-in')
            ]),
            transition('*=>void', [
                style({
                    transform: 'scale3d(.0, .0, .0)'
                }),
                animate('0.1s ease-out')
            ])
        ])
    ]
})

export class CTALoginComponent implements OnInit, OnDestroy {

    /** 
    * Properties
     */
    public showDialog: boolean;
    public currentState: string;

    public ctaModalSubcription: Subscription;
    constructor(public _ctaLoginService: CTALoginService) { }

    public ngOnInit(): void {
        this.ctaModalSubcription = this._ctaLoginService.ctaLoginSubject$.subscribe(res => {
            this.showDialog = res.show;
        })
    }

    public ngOnDestroy(): void {
        this.ctaModalSubcription.unsubscribe();
    }

}