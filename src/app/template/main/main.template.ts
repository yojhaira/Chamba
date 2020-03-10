import { Component, OnInit, Inject, HostListener } from '@angular/core';
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
    public oficios:Array<Oficio>;
    public scroll: number;

    constructor(
        @Inject(DOCUMENT) private document: any,
        // private sOficio:OficioService
    ) { 
        this.oficios = [];
        // this.listarOficios();
    }

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
