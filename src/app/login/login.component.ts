import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

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


}
