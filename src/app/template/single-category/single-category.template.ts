import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'single-category',
    templateUrl: './single-category.template.html',
    styleUrls: ['./single-category.template.scss']
})

export class SingleCategoryTemplate implements OnInit {

    public data: any;

    constructor(
        private activatedRoute: ActivatedRoute
    ) { }

    public ngOnInit(): void {
        console.log(this.activatedRoute.snapshot.params);
        this.getParameters();
    }

    public getParameters(): any {
        return this.data = {
            titlePage: this.activatedRoute.snapshot.params.categoryName,
            imagePage: this.activatedRoute.snapshot.params.categoryImage
        };
    }

}