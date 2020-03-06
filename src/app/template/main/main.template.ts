import { Component, OnInit, Inject, HostListener } from '@angular/core';
// import { WindowScrollService } from 'src/app/services/window-scroll.service';

import { DOCUMENT } from '@angular/common';
import { fromEvent, Observable, empty } from 'rxjs';
import { share, auditTime, map } from 'rxjs/operators';

@Component({
    selector: 'main-template',
    templateUrl: './main.template.html',
    styleUrls: ['./main.template.scss']
})

@HostListener("scroll", ['$event'])
export class MainTemplate implements OnInit {

    public scroll: number;
    constructor(
        @Inject(DOCUMENT) private document: any
    ) { }

    detectScroll($event: any) {
        // let scrollOffset = $event.srcElement.children[0].scrollTop;
        console.log('hola');
    }
    
    fixedHeader() {
        
        // this.scroll$ = fromEvent(boxHome, 'scroll').pipe(
        // 	auditTime(200),
        // 	map(event => {
            // 		return boxHome.scrollY || boxHome.document.documentElement.scrollTop;
        // 	}),
        // 	share()
        // )
        // const scrollElement = fromEvent(window, 'scroll').pipe(
            //     map(() => {
        //         return window.scrollY || document.documentElement.scrollTop;
        //     }),
        //     auditTime(200),
        //     share()
        // )

        // scrollElement.subscribe((event: any) => {
        //     this.scroll = window.scrollY;
        // })
    }

    boxHome: any = this.document.querySelector('.main');
    @HostListener('window:scroll', ['$event'])

    onScrollEvent($event) {
        console.log(this.boxHome);
        console.log('hola');
    }

    ngOnInit() {
        // this.fixedHeader();
    }

}
