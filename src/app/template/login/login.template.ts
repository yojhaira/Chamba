import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service'
import { DOCUMENT } from '@angular/common';
import { usuarioI } from 'src/app/models/usuario';
import { Router } from '@angular/router'

@Component({
    selector: 'login-template',
    templateUrl: './login.template.html',
    styleUrls: ['./login.template.scss'],
    providers: [AuthService]
})

export class LoginTemplate implements OnInit {

    public loginForm: any;
    public showError: boolean;
    public textError: string;
    constructor(
        @Inject(DOCUMENT) private document: any,
        private formBuilder: FormBuilder,
        private _authServive: AuthService,
        private _router: Router
    ) {
        this.showError = false;
    }


    ngOnInit(): void {

        this.loginForm = this.formBuilder.group({
            emailUser: ['', [Validators.required, Validators.email]],
            passwordUser: ['', Validators.required]
        })
        //

    }

    get f() {
        return this.loginForm.controls;
    }

    public getError(controlName: string): string {
        let error: any;
        let message: string = "";

        let controlForm: any = this.loginForm.get(controlName);

        if (controlForm.touched && controlForm.errors != null) {

            error = controlForm.errors;

            if (error.required) {
                message = `Este campo es requerido`
            }

            if (error.email) {
                message = `Debe ingresar un e-mail valido`
            }
        }

        return message;

    }

    public markInvalidField() {

    }

    public onLogin(): void {

        if (this.loginForm.valid) {
            this._router.navigate(['/']);
        }


        //console.log(form.value);
        // let user: usuarioI = {
        //     correo: form.value.emailUser,
        //     password: form.value.passwordUser
        // }

        // this._authServive.authUser(user).subscribe(result => {
        //         //console.log(result);
        //         if (result.response.length) {
        //             this._authServive.setUser(user);
        //             this._router.navigate(['/']);
        //         } else {
        //             this.showError = true;
        //             this.textError = "Upsi falta la tarea"
        //         }
        //     }, error => {
        //         //console.log(error);
        //     }
        // )
    }
}


