import mongoose, { Schema } from "mongoose";
import { Pago} from './pago.model';

 
 const schema = new mongoose.Schema<Pago>({//Usuario es la interface que creamos 
    id: String,
    numeroTarjeta: String ,
    cvv: String

});
export const pagoschema = mongoose.model('pago',schema);