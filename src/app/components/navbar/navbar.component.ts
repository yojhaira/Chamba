import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service'

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(public _authService: AuthService) { }

    ngOnInit(): void {
    }

    onLogout() {
        this._authService.logoutUser();
    }
}
