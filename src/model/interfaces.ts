type Gender = "Male" | "Female";//Masculino o femenino
 export interface Usuario {
    id:string,
    nombre:string, 
    apellido:string,
    mail:string,
    password:string,
    ordenes: Array<string>,
    pago: Array<string>
   
};
export interface Admin {
    id: string,
    nombre: string,
    apellido: string,
    mail: string,
    username: string,
    password: string,
    urlImagen: string
};
export interface Motoristas {
    nombreMotorista: string,
    apellidoMotorista: string,
    mail: string,
    password: string,
    estado: string,
    ordenesPendientes: Array<string>,
    ordenesFinalizadas:Array<string>,
    matricula: string
}
export interface Empresas {
    nombreEmpresa: string,
    logo: string,
    banner: string,
    descripcion: string,
    productos:Array<string>
}
//jj