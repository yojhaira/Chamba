import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CTALoginService {

    public ctaLoginSubject = new Subject<any>();
    public ctaLoginSubject$ = this.ctaLoginSubject.asObservable();

    constructor() { }

    public open() {
        this.ctaLoginSubject.next({
            show: true
        })
    }

    public close() {
        this.ctaLoginSubject.next({
            show: false
        })
    }
}