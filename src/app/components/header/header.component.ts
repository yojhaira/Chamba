import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../service/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public _authService:AuthService) { }

  ngOnInit(): void {
  }

  onLogout(){
    this._authService.logoutUser();
    
  }
}
