import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { JobService } from 'src/app/services/job-categories/job-categories.service';

@Component({
    selector: 'categories',
    templateUrl: './categories.template.html',
    styleUrls: ['./categories.template.scss'],
    providers: [
        JobService
    ]
})

export class CategoriesTemplate implements OnInit {

    @ViewChild("wrapperMain", { static: true }) wrapperMain: ElementRef;

    public titlePage: string;
    public nameImage: string;

    constructor(
        public jobService: JobService
    ) { }

    public ngOnInit(): void {
        // this.scrollToElement(this.wrapperMain.nativeElement);
        this.titlePage = "Categorías";
        this.nameImage = "gardering"
    }

    public scrollToElement($element): void {
        setTimeout(() => {
            $element.scrollIntoView(
                {
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest"
                }
            );
        }, 500);
    }
}