import { Component, OnInit } from '@angular/core';
import { MailboxMessageService } from 'src/app/services/mailbox-message/mailbox-message.service';
import { ReaderMessageService } from 'src/app/services/quotes/reader-message/reader-message.service';

@Component({
    selector: 'quotes-template',
    templateUrl: './quotes.template.html',
    styleUrls: ['./quotes.template.scss']
})

export class QuotesTemplate implements OnInit {

    public listMessage: Array<any>;
    public readIndicator: boolean;

    constructor(
        private _mailboxMessageService: MailboxMessageService,
        public _readerMessageService: ReaderMessageService
    ) { }

    public ngOnInit(): void {
        this.getMailboxMessages();
    }

    public getMailboxMessages(): void {
        this.listMessage = this._mailboxMessageService.getMessageList();
    }
}