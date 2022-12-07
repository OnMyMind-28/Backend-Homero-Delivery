
import  { Request, Response  } from 'express';
import {pagoschema } from '../model/pago.schema';


export const ObtenerPago= async (req: Request, res: Response) => {
    const result =  await pagoschema.find({_id: req.params.id});
    res.send(result.length === 1 ? result [0] : {});
    res.end();
   };

   export const ObtenerPagos = (req: Request, res: Response) => {
    pagoschema.find().then(result =>{
      res.send(result);
      res.end();
    })
     
    };

    export const RealizarPago = async (req: Request, res: Response) => {
        const nuevoPago = new pagoschema (
            {
                ...req.body
                
            }
            );
            const result =  await nuevoPago.save();
            res.send(result);
            res.end();
          };
