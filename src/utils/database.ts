import mongoose from 'mongoose';
import dotenv from 'dotenv';

export class Database {
    homer: string = 'Homero_Delivery';
    host:string = 'localhost';
    port: string = '27017';
    //esta es la tuya
   // URI:string= `mongodb://${this.host}:${this.port}/${this.homer}`;

    constructor (){
        this.conectar();
    }
//Ruth cuando quieras conctar desde atlas descomenta esto 
//Para pack package.json "dev": "ts-node-dev --respawn --transpile-only src/index.ts"
    /*conectar(){
        mongoose
        .connect(process.env.MONGOURL!) //Asincrona
        .then(result=>console.log('Se conecto a mongodb'))
        .catch(error=>console.log(error));
    }*/




//Para levantar el servidor de Talia
    async conectar (){
        await  mongoose.connect(`mongodb://${this.host}:${this.port}/${this.homer}`)
        console.log('Ya se conecto mongodb oka');
         /* .then(() => {
              console.log('Ya se conecto');
          })
          .catch ((error) => {
              console.log(error);
          }) ;*/
      }
}
//Cambio en package json en dev para levantar el servidor Talia
//"dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""