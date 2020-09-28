import { Component, OnInit, OnDestroy, Renderer2, ViewChild, ElementRef, Input, HostListener } from '@angular/core';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { RecursiveService } from 'src/app/services/recursive/recursive.service';

@Component({
    selector: 'notification-alert-component',
    templateUrl: './notification-alert.component.html',
    styleUrls: ['./notification-alert.component.scss']
})

export class NotificationAlertComponent implements OnInit, OnDestroy {

    @ViewChild('notificationPanel') notificationPanel: ElementRef;
    public notifications: Array<any>;
    public recentNotifications: Array<any>;
    public previousNotifications: Array<any>;

    public currentDate: string;

    constructor(
        private _notificationsService: NotificationsService,
        private _recursive: RecursiveService,
        private _renderer: Renderer2
    ) { }

    public initialAnimation(): void {
        console.log('funciona');
        setTimeout(() => {
            this._renderer.addClass(this.notificationPanel.nativeElement, 'init');
        }, 300);
    }

    public getNotifications(): Array<any> {
        this.notifications = this._notificationsService.getListNotifications();
        return this.notifications;
    }

    public formattedDate(date: string): string {
        return this._recursive.formatDate(date);
    }

    public getDateNotifications(dateOfIssue: string): any {
        let plainDate: any = dateOfIssue.split('-');
        let date = new Date(plainDate[0], plainDate[1] - 1, plainDate[2]).setHours(0, 0, 0, 0);
        return date;
    }

    public getDateObject(paremeterDate: string): any {
        let plainDate: any = paremeterDate.split('-');
        let date = new Date(plainDate[0], plainDate[1], plainDate[2]).setHours(0, 0, 0, 0);
        return date;
    }

    @HostListener('document:click', ['$event'])
    clickout(event) {
        // if (this._elementRef.nativeElement.contains(event.target)) {
        //     console.log('se mantiene');
        // } else {
        //     this.destroyNotificationPanel();
        // }
    }

    public getRecentNotifications(): void {

        this.notifications = this.getNotifications();
        this.recentNotifications = [];

        this.notifications.forEach(element => {
            if (this.getDateObject(this.currentDate) == this.getDateNotifications(element.notificationDateOfIssue)) {

                this.recentNotifications.push(element);

            }
        });
    }

    public getPreviousNotifications(): void {

        this.notifications = this.getNotifications();
        this.previousNotifications = [];

        this.notifications.forEach(element => {
            if (this.getDateObject(this.currentDate) > this.getDateNotifications(element.notificationDateOfIssue)) {

                this.previousNotifications.push(element);

            }
        });
    }

    public ngOnInit(): void {
        console.log('Notificaciones iniciado');
        this.notifications = [];
        this.currentDate = this._recursive.getCurrentDate();
        this.getNotifications();

        this.initialAnimation();

        this.getRecentNotifications();
        this.getPreviousNotifications();
    }

    public ngOnDestroy(): void {
        // console.log('Notificaciones destruido');
    }

}