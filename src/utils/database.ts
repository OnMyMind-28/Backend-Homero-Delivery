import mongoose from 'mongoose';
import dotenv from 'dotenv';
const bd:string = 'usuario';
const port:string = '27017';
//por medio de la ip se hizo el llamado y se conecto a mongo  cambiar esto por que solo fue una prueba 
const host:string = '127.0.0.1';

export class Database {
    homer: string = 'Homero_Delivery';
    host:string = 'localhost';
    port: string = '27017';

    constructor (){
        this.conectar();
    }

    conectar(){
        mongoose
        .connect(process.env.MONGOURL!) //Asincrona
        .then(result=>console.log('Se conecto a mongodb'))
        .catch(error=>console.log(error));
    }
}