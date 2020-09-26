import { Component, OnInit, Renderer2, ViewChild, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

    @ViewChild('buttonSidenav') buttonSidenav: ElementRef;
    @ViewChild('inputSearch') inputSearch: ElementRef;

    public toggleSidenav: boolean;
    @Output() toggleEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

    public stateButtonSidenav: boolean;
    public loggedIn: boolean;

    public viewNotifications: boolean;
    public activeSearch: boolean;

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

        this.activeSearch = false;
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

    public activateSearch(val: boolean, e: any): void {
        let input = e.currentTarget;
        let value = input.value;

        if (val === true) {
            this.activeSearch = val;
        } else {

            this.activeSearch = val;

            if (value == '') {
                this.activeSearch = false;
            } else {
                this.activeSearch = true;
            }
        }

        console.log(this.activeSearch);
        console.log(input.value);
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
