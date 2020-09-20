import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { DOCUMENT } from '@angular/common';
import { usuarioI } from 'src/app/models/usuario';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


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
        private _router: Router
       
    ) {

    }

    
    ngOnInit(): void {
        this.formRegister = this.formBuilder.group({
            nombres: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*')]],
            apellidos: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*')]],
            f_nacimiento: ['', Validators.required],
            correo: ['', [Validators.required,Validators.email]],
            password: ['', [Validators.required,Validators.minLength(5)]],
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

        if(!this.validar(usuario)) return;
        

        console.log(usuario);

        this.sUsuario.saveUser(usuario).subscribe(
            result => {
                if(result.status == 200){
                    this._router.navigate(['/login']);
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

    validar(usuario:usuarioI){
        if(usuario.nombres == ""){
            console.log("Especificar Nombres");
            return false;
        }

        return true;
    }

    getErrorsNombres(){
        return this.formRegister.get('nombres').hasError('required')? 'Se requiere nombres':
               this.formRegister.get('nombres').hasError('pattern')? 'No se admiten números':'';
    }
    getErrorsApellidos(){
        return this.formRegister.get('apellidos').hasError('required')? 'Se requiere apellidos':
               this.formRegister.get('apellidos').hasError('pattern')? 'No se admiten números':'';
    }
    getErrorsNacimiento(){
        return this.formRegister.get('f_nacimiento').hasError('required')? 'Se requiere fecha de nacimiento':'';
    }
    getErrorsEmail(){
		return this.formRegister.get('correo').hasError('required')? 'Se requiere correo':
			   this.formRegister.get('correo').hasError('email')? 'Formato de correo incorrecto':'';
	  }
	getErrorsPassword(){
		return this.formRegister.get('password').hasError('required')? 'Contraseña obligatoria':
		       this.formRegister.get('password').hasError('minlength')? 'Ingrese mas de 5 caracteres':'';
    }

}