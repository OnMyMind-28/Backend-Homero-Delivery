import mongoose from "mongoose";
import { Empresas } from "./empresas.model";

const schema = new mongoose.Schema<Empresas>({//Empresas es la interface que creamos 
    nombreEmpresa: String,
    logo: String,
    banner: String,
    descripcion: String,
    productos:Array<String>
});

export const EmpresasSchema = mongoose.model('empresas', schema);//Empresas es el nombre de la colección
