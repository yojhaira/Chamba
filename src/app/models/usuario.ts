export interface usuarioI{
     id?:BigInteger,
     nombres?:string,
     apellidos?:string,
     f_nacimiento?:Date,
     correo:string,
     password:string,
     genero?:string,
     telefono?:string,
     img?:string,
     id_estado?:number,
     id_distrito?:number,
     id_rol?:number
}