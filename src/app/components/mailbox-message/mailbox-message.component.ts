import { Component, Input, OnInit } from '@angular/core';
import { MailboxMessageService } from 'src/app/services/mailbox-message/mailbox-message.service';
import { ReaderMessageService } from 'src/app/services/quotes/reader-message/reader-message.service';

@Component({
    selector: 'mailbox-message-component',
    templateUrl: './mailbox-message.component.html',
    styleUrls: ['./mailbox-message.component.scss']
})

export class MailboxMessageComponent implements OnInit {

    @Input() indice: number;
    @Input() dataMessage: any;

    constructor(
        private _readerMessageService: ReaderMessageService
    ) { }

    public ngOnInit(): void { }

    public assignValues(data): void {
        this._readerMessageService.readerMessage(data);
    }

}