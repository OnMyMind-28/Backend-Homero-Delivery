import mongoose from "mongoose";
import { Motoristas } from "./motoristas.model";

const schema = new mongoose.Schema<Motoristas>({//Mptpristas es la interface que creamos 
      nombreMotorista: String,
    apellidoMotorista: String,
    mail: String,
    password: String,
    estado: String,
    ordenesPendientes: Array<String>,
    ordenesFinalizadas:Array<String>,
    matricula: String
});

export const MotoristasSchema = mongoose.model('motoristas', schema);//motoristas es el nombre de la colección