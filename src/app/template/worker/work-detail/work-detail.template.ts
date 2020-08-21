import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'work-detail-template',
    templateUrl: './work-detail.template.html',
    styleUrls: ['./work-detail.template.scss']
})

export class WorkDetailTemplate implements OnInit {

    public imagesPost: Array<any>;
    public imageMain: string;

    constructor() { }

    public ngOnInit(): void {
        this.imagesPost = [
            {
                imageID: '1',
                imageUrl: '../../../assets/images/users/workers/post/image-1.jpg'
            },
            {
                imageID: '1',
                imageUrl: '../../../assets/images/users/workers/post/image-2.jpg'
            },
            {
                imageID: '1',
                imageUrl: '../../../assets/images/users/workers/post/image-3.jpg'
            }
        ]

        this.imageMain = this.imagesPost[0].imageUrl;
    }

    public setImageMain(imagePath: string): void {
        this.imageMain = imagePath;
    }
}