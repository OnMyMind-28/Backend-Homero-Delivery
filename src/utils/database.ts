import mongoose from 'mongoose';
const bd:string = 'usuario';
const port:string = '27017';
//por medio de la ip se hizo el llamado y se conecto a mongo  cambiar esto por que solo fue una prueba 
const host:string = '127.0.0.1';

export class Database{
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose
        .connect(`mongodb+srv://Ruth:17071990@cluster0.g1tqh6f.mongodb.net/prueba?retryWrites=true&w=majority`) //Asincrona
        .then(result=>console.log('Se conecto a mongodb'))
        .catch(error=>console.log(error));
    }
}