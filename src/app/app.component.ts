import { Component, OnInit } from '@angular/core';


import { DOCUMENT } from '@angular/common';
import { fromEvent, Observable, empty } from 'rxjs';
import { share, auditTime, map } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	public scroll = 0;

	constructor(
		// @Inject(DOCUMENT) private document: any
	) { }

	// fixedHeader() {
	// 	let boxHome: any = this.document.querySelector('.main');
	// 	console.log(boxHome);

	// 	// this.scroll$ = fromEvent(boxHome, 'scroll').pipe(
	// 	// 	auditTime(200),
	// 	// 	map(event => {
	// 	// 		return boxHome.scrollY || boxHome.document.documentElement.scrollTop;
	// 	// 	}),
	// 	// 	share()
	// 	// )
	// 	const scrollElement = fromEvent(window, 'scroll').pipe(
	// 		map(() => {
	// 			return window.scrollY;
	// 		}),
	// 		auditTime(200),
	// 		share()
	// 	)

	// 	scrollElement.subscribe((event: any) => {
	// 		this.scroll = window.scrollY;
	// 	})

	// }

	ngOnInit() {
		// this.fixedHeader();

	}
}
