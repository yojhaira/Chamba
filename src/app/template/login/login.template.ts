import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService} from '../../service/auth.service'
import { DOCUMENT } from '@angular/common';
import { usuarioI } from 'src/app/models/usuario';
import { Router} from '@angular/router'

@Component({
	selector: 'login-template',
	templateUrl: './login.template.html',
	styleUrls: ['./login.template.scss'],
	providers: [AuthService]
})

export class LoginTemplate implements OnInit {

	public loginForm: any;
	public showError:boolean;
	public textError:string;
	constructor(
		@Inject(DOCUMENT) private document: any,
		private formBuilder: FormBuilder,
		private _authServive:AuthService,
		private _router:Router
	) {
		this.showError = false;
	}
	
	
	ngOnInit(): void {
		
		this.loginForm = this.formBuilder.group({
			emailUser :  ['', Validators.required],
			passwordUser :  ['', Validators.required]
		})

	}
	onLogin(form){
		//console.log(form.value);
		let user:usuarioI = {
			correo:form.value.emailUser,
			password:form.value.passwordUser
		}
		this._authServive.authUser(user).subscribe(
			result => {
				//console.log(result);
				if(result.response.length){
					this._authServive.setUser(user);
					this._router.navigate(['/']);		
				}else{
					this.showError = true;
					this.textError = "Upsi falta la tarea"
				}	
			},
			error => {
				//console.log(error);
			}
		)
	}
}


