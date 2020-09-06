import { Component, OnInit, Renderer2, ViewChild, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

    @ViewChild('buttonSidenav') buttonSidenav: ElementRef;

    public toggleSidenav: boolean;
    @Output() toggleEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

    public stateButtonSidenav: boolean;
    public loggedIn: boolean;

    public viewNotifications: boolean;

    constructor(
        public _authService: AuthService,
        public _renderer: Renderer2,
        private _elementRef: ElementRef
    ) { }

    ngOnInit(): void {
        this.stateButtonSidenav = true;
        this.loggedIn = false;
        this.viewNotifications = false;

        this.toggleSidenav = true;
    }

    public toggleSidenavFunction(): void {
        if (this.stateButtonSidenav) {
            this._renderer.addClass(this.buttonSidenav.nativeElement, 'disabled');
            this.stateButtonSidenav = false;
            this.toggleEvent.emit(!this.toggleSidenav);
        } else {
            this.stateButtonSidenav = true;
            this._renderer.removeClass(this.buttonSidenav.nativeElement, 'disabled');
            this.toggleEvent.emit(this.toggleSidenav);
        }
    }

    public toggleMenu(): void {
    }

    public toggleNotificationPanel(): void {
        this.viewNotifications = !this.viewNotifications;
    }

    public destroyNotificationPanel(): void {
        this.viewNotifications = false;
    }

    onLogout() {
        this._authService.logoutUser();
    }
}
