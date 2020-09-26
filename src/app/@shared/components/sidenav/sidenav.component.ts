import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {

    @Input() stateSidenav: boolean;

    constructor() { }

    ngOnInit(): void {
        this.stateSidenav = true;
        // console.log(this.stateSidenav);
    }


}