import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ReaderMessageService {

    public dataMessage: any;
    public readingIndicator: boolean;

    constructor() {
        this.dataMessage = {
            messageID: '',
            state: '',
            importance: false,
            dateOfIssue: '',
            sender: {
                name: '',
                photo: '',
                type: '',
                mail: ''
            },
            messageDescription: {
                title: '',
                description: ''
            }
        }
        this.readingIndicator = false;
        console.log(this.readingIndicator);
    }

    public readerMessage(data): any {
        this.dataMessage = data;
        this.readingIndicator = true;

        console.log(this.readingIndicator)
    }
}