import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService} from '../../service/auth.service'
import { DOCUMENT } from '@angular/common';

@Component({
	selector: 'login-template',
	templateUrl: './login.template.html',
	styleUrls: ['./login.template.scss'],
	providers: [AuthService]
})

export class LoginTemplate implements OnInit {

	public loginForm: any;

	constructor(
		@Inject(DOCUMENT) private document: any,
		private formBuilder: FormBuilder,
		private _authServive:AuthService
	) {}
	
	
	ngOnInit(): void {
		
		this.loginForm = this.formBuilder.group({
			emailUser :  ['', Validators.required],
			passwordUser :  ['', Validators.required]
		})

	}
}
