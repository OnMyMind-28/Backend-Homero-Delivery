import mongoose from 'mongoose';
import dotenv from 'dotenv';

export class Database {
    homer: string = 'Homero_Delivery';
    host:string = 'localhost';
    port: string = '27017';
    URI:string= `mongodb://${this.host}:${this.port}/${this.homer}`;

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