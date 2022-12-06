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