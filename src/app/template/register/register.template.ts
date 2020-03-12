import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService} from '../../service/usuario.service';
import { DOCUMENT } from '@angular/common';
import { usuarioI } from 'src/app/models/usuario';
import { Router} from '@angular/router'

@Component({
    selector: 'register-template',
    templateUrl: './register.template.html',
    styleUrls: ['./register.template.scss'],
    providers: [UsuarioService ]
})

export class RegisterTemplate implements OnInit {
    // Properties
    public formRegister: any;
    public showError:boolean;

    constructor(
        // private formBuilder: FormBuilder,
        // private formGroup: FormGroup
    ) {}

    ngOnInit(): void {
        // this.formRegister = '';
    }
}