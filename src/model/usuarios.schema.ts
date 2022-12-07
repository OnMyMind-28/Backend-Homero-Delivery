import mongoose from "mongoose";
import { Usuario } from './usuarios.model';

const schema = new mongoose.Schema<Usuario>({
    //Usuario es la interface que creamos 
    correo: String,
    password: String ,      

});

export const UsuariosSchema = mongoose.model('usuarios', schema);//usuarios es el nombre de la colección