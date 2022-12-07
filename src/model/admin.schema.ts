import mongoose from "mongoose";
import { Admin } from './admin.model';

const schema = new mongoose.Schema<Admin>({//Admin es la interface que creamos 
    id: String,
    nombre: String,
    apellido: String,
    mail: String,
    username: String,
    password: String,
    urlImagen: String,
});
//jk
export const AdminSchema = mongoose.model('administradores', schema);//administradores es el nombre de la colección