import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { ReaderMessageService } from 'src/app/services/quotes/reader-message/reader-message.service';
import { SharedService } from 'src/app/services/shared/shared.service';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'message-reader-component',
    templateUrl: './message-reader.component.html',
    styleUrls: ['./message-reader.component.scss']
})

export class MessageReaderComponent implements OnInit, OnChanges {

    public dataSubject: any;
    public answerIndicator: boolean;
    public answers: Array<any>;
    public singleAnswer: any;

    public responseForm: FormGroup;

    constructor(
        public _readerMessageService: ReaderMessageService,
        private _sharedService: SharedService,
        private _formBuilder: FormBuilder
    ) { }

    public ngOnInit(): void {
        this.answerIndicator = false;
        this.answers = []

        this.singleAnswer = {
            answerID: 1,
            description: '',
            author: {
                authotName: '',
                authotEmail: '',
            },
            date: ''
        }

        this.getDate();
        this.buildForm();
        this.getData();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        // this.doSomething(changes.dataSubject.currentValue)
    }

    public getData() {
        this.dataSubject = this._readerMessageService.dataMessage.messageID;
        console.log(this.dataSubject);
    }

    public replyQuote(): void {
        this.answerIndicator = !this.answerIndicator;
    }

    public getDate() {
        this._sharedService.getCurrentDate();
    }

    private buildForm(): void {
        this.responseForm = this._formBuilder.group({
            response: [''],
            shareSocial: [false],
        })
    }

    public sendAnswer(): void {
        this.answers.push(
            {
                answerID: 1,
                description: '',
                author: {
                    authotName: '',
                    authotEmail: '',
                },
                date: ''
            })
    }

}