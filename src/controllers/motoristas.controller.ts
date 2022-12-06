import  { Request, Response } from 'express';
import { MotoristasSchema } from '../model/motoristas.schema';


export const ObtenerUsuario = async (req: Request, res: Response) => {
   const result =  await MotoristasSchema.find({_id: req.params.id});
   res.send(result.length === 1 ? result [0] : {});
   res.end();
  };
  export const ObtenerUsuarios = (req: Request, res: Response) => {
    MotoristasSchema.find().then(result =>{
      res.send(result);
      res.end();
    })
     
    };

export const CrearUsuario = async (req: Request, res: Response) => {
    const nuevoUsuario = new MotoristasSchema(
     // req.body ->se puede solo agregando esto o atribito por atribito como se muestra en el comentario
     {
        nombreMotorista: req.body.nombreMotorista,
        apellidoMotorista: req.body.apellidoMotorista,
        mail: req.body.mail,
        password: req.body.password,
        estado: req.body.estado,
        ordenesPendientes: req.body.ordenesPendientes,
        ordenesFinalizadas: req.body.ordenesFinalizadas,
        matricula: req.body.matricula
     }
    );
    const result =  await nuevoUsuario.save();
    res.send(result);
    res.end();
  };

export const ActualizarUsuario = async (req: Request, res: Response) => {
  const result = await MotoristasSchema.updateOne({_id: req.params.id },
    {
        nombreMotorista: req.body.nombreMotorista,
        apellidoMotorista: req.body.apellidoMotorista,
        mail: req.body.mail,
        password: req.body.password,
        estado: req.body.estado,
        ordenesPendientes: req.body.ordenesPendientes,
        ordenesFinalizadas: req.body.ordenesFinalizadas,
        matricula: req.body.matricula
    });
    res.send(
      {
        massage: 'Actualizar usuario: '+ req.params.id, 
        result
      });
    res.end();
  };
export const EliminarUsuario = async (req: Request, res: Response) => {
 const result =  await MotoristasSchema.remove({_id: req.params.id});
    res.send({
      massage: 'Eliminar usuario: '+ req.params.id,
      result
    
    });
   
  };

  