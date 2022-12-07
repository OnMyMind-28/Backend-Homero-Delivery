import mongoose, { Schema } from "mongoose";
import { Pago} from './pago.model';

 
 const schema = new mongoose.Schema<Pago>({//Usuario es la interface que creamos, un agreado de los cliente 
    id: String,
    numeroTarjeta: String ,
    cvv: String

});
export const pagoschema = mongoose.model('pago',schema);