import { Component, OnInit, Inject, HostListener, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Oficio } from '../../models/oficio';
// import { OficioService } from '../../service/oficio.service';
// import { WindowScrollService } from 'src/app/services/window-scroll.service';

import { DOCUMENT } from '@angular/common';
import { fromEvent, Observable, empty } from 'rxjs';
import { share, auditTime, map } from 'rxjs/operators';

@Component({
    selector: 'main-template',
    templateUrl: './main.template.html',
    styleUrls: ['./main.template.scss'],
    // providers: [OficioService]
})

@HostListener("scroll", ['$event'])

export class MainTemplate implements OnInit {

    @ViewChild('sidenavComponent') sidenavComponent: ElementRef;
    @ViewChild('mainContent') mainContent: ElementRef;
    public toggleSidenav: boolean;

    public oficios: Array<Oficio>;
    public scroll: number;

    constructor(
        @Inject(DOCUMENT) private document: any,
        private _renderer: Renderer2
        // private sOficio:OficioService
    ) {
        // this.oficios = [];
        // this.listarOficios();
    }

    public receivedStateSidenav($event) {
        this.toggleSidenav = $event;

        this.stateTemplate($event);
    }

    detectScroll($event: any) {
        // let scrollOffset = $event.srcElement.children[0].scrollTop;
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
    }

    public stateTemplate(state: boolean): void {
        if (state) {
            this._renderer.removeClass(this.sidenavComponent.nativeElement, 'closed');
            this._renderer.removeClass(this.mainContent.nativeElement, 'extended');
        } else {
            this._renderer.addClass(this.sidenavComponent.nativeElement, 'closed');
            this._renderer.addClass(this.mainContent.nativeElement, 'extended');
        }
    }

    ngOnInit() {
        // this.fixedHeader();
        this.toggleSidenav = true;
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

}
