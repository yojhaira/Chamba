import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { DOCUMENT } from '@angular/common';
import { usuarioI } from 'src/app/models/usuario';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AuthService} from '../../service/auth.service'

@Component({
    selector: 'register-template',
    templateUrl: './register.template.html',
    styleUrls: ['./register.template.scss'],
    providers: [UsuarioService]
})

export class RegisterTemplate implements OnInit {
    // Properties
    public formRegister: any;
    public showError:boolean;
    
    constructor(
        private sUsuario: UsuarioService,
        private formBuilder: FormBuilder,
        private _router: Router,
        private _authServive:AuthService,
    ) {

    }

    
    ngOnInit(): void {
        this.formRegister = this.formBuilder.group({
            nombres: ['', Validators.required],
            apellidos: ['', Validators.required],
            f_nacimiento: ['', Validators.required],
            correo: ['', Validators.required],
            password: ['', Validators.required],
            genero: ['', Validators.required],
            telefono: ['', Validators.required],
        })
    }

    registrar(form) {
        let usuario: usuarioI = {
            nombres: form.value.nombres,
            apellidos: form.value.apellidos,
            f_nacimiento: form.value.f_nacimiento,
            correo: form.value.correo,
            password: form.value.password,
            genero: form.value.genero,
            telefono: "-",
            img: form.value.genero,
            id_estado: 1,
            id_distrito: 1,
            id_rol: 1
        }

        

        console.log(usuario);

        this.sUsuario.saveUser(usuario).subscribe(
            result => {
                if(result.status == 200){
                    this._authServive.setUser(usuario);
                    this._router.navigate(['/']);
                }
                else{
                    alert(result.mensaje)
                }
            },
            error => {
                console.log(error);
            }
        )
    }
}