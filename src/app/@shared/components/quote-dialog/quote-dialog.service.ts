import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class QuoteDialogService {

    public toggleDialogComponent: boolean;
    public toggleDialogState: boolean;

    constructor() {
        this.toggleDialogState = false;
    }

    public openDialog(): void {
        this.toggleDialogComponent = true;

        setTimeout(() => {
            this.toggleDialogState = true;
        }, 200);
    }

    public closeDialog(): void {
        this.toggleDialogState = false;

        setTimeout(() => {
            this.toggleDialogComponent = false;
        }, 200);
    }

}