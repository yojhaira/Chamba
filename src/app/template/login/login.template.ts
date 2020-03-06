import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'login-template',
  templateUrl: './login.template.html',
  styleUrls: ['./login.template.scss']
})

export class LoginTemplate implements OnInit {
//app-routing.module
  // instanciamos el formilario que fue creado en login.html
  public formLogin= new FormGroup({
    user: new FormControl('',[
      Validators.required,
      Validators.email
    ]
    ),
    password: new FormControl('',[
      Validators.required, //  elemnto requerido
      Validators.minLength(6) //  minimo de caracteres 6
    ])
  });

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  public onClickMe() {
    console.log('clickc ckick');
  }
  
  public getErrorUserName(){

    return this.formLogin.get('user').hasError('required')? 'Usuario requerido': 
    this.formLogin.get('user').hasError('email')? 'formato incorrecto':''
  };

  public getErrorPassword(){

    return this.formLogin.get('password').hasError('required')? 'Contraseña requerida': 
    this.formLogin.get('password').hasError('minlength')? 'Mimino 6 caracteres':''
  }

  public cleanInput(valor){
    console.log('limpiar');
    
    valor.setValue('');
  }


  public evaluar(valor){
    if(valor.value=='')
    console.log("tamano 0")
    else
    console.log("siii");
    
  }
}
