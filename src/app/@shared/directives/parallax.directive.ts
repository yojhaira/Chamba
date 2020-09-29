import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[effectParallax]'
})

export class ParallaxDirective {

    @Input('ratio') private parallaxRatio: number;
    private initialTop: number;

    constructor(
        private _elementRef: ElementRef
    ) {
        this.parallaxRatio = 1;
        this.initialTop = this._elementRef.nativeElement.getBoundingClientRect().top;
    }

    @HostListener("window:scroll", ["$event"]) onWindowScroll(event) {
        this._elementRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px';
    }
}