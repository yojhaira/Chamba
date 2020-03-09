import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
	selector: 'login-template',
	templateUrl: './login.template.html',
	styleUrls: ['./login.template.scss']
})

export class LoginTemplate implements OnInit {

	public loginForm: any;

	constructor(
		@Inject(DOCUMENT) private document: any,
		private formBuilder: FormBuilder
	) {}
	
	
	ngOnInit(): void {
		
		this.loginForm = this.formBuilder.group({
			emailUser :  ['', Validators.required],
			passwordUser :  ['', Validators.required]
		})

	}
}
