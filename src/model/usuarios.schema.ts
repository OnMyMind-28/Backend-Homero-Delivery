import mongoose from "mongoose";
import { Usuario } from './usuarios.model';

const schema = new mongoose.Schema<Usuario>({
    //Usuario es la interface que creamos 
    // esquema de usuario
    id:String,
    nombre:String, 
    apellido:String,
    mail:String,
    password:String,
    ordenes: Array<String>,
    pago: Array<String>
});

export const UsuariosSchema = mongoose.model('usuarios', schema);//usuarios es el nombre de la colección