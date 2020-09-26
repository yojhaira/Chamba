import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common'

@Component({
    selector: 'header-page',
    templateUrl: './header-page.component.html',
    styleUrls: ['./header-page.component.scss']
})

export class HeaderPageComponent implements OnInit {

    @Input() title: string;
    @Input() image: string;

    constructor(
        private location: Location
    ) {
        this.title = "";
        this.image = "";
    }

    public ngOnInit(): void {
    }

    public goBack(): void {
        this.location.back();
    }
}