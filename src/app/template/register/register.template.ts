import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {} from '../../service/usuario.service';

@Component({
    selector: 'register-template',
    templateUrl: './register.template.html',
    styleUrls: ['./register.template.scss']
})

export class RegisterTemplate implements OnInit {
    // Properties
    // public formRegister: any;

    constructor(
        // private formBuilder: FormBuilder,
        // private formGroup: FormGroup
    ) {}

    ngOnInit(): void {
        // this.formRegister = '';
    }
}