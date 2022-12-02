import  { Request, Response } from 'express';
import { AdminSchema } from '../model/admin.schema';


export const ObtenerUsuario = async (req: Request, res: Response) => {
   const result =  await AdminSchema.find({_id: req.params.id});
   res.send(result.length === 1 ? result [0] : {});
   res.end();
  };
  export const ObtenerUsuarios = (req: Request, res: Response) => {
    AdminSchema.find().then(result =>{
      res.send(result);
      res.end();
    })
     
    };

export const CrearUsuario = async (req: Request, res: Response) => {
    const nuevoUsuario = new AdminSchema(
     // req.body ->se puede solo agregando esto o atribito por atribito como se muestra en el comentario
     {
           id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        mail: req.body.mail,
        username: req.body.username,
        password: req.body.password,
        urlImagen: req.body.urlImagen,
     }
    );
    const result =  await nuevoUsuario.save();
    res.send(result);
    res.end();
  };

export const ActualizarUsuario = async (req: Request, res: Response) => {
  const result = await AdminSchema.updateOne({_id: req.params.id },
    {
        id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        mail: req.body.mail,
        username: req.body.username,
        password: req.body.password,
        urlImagen: req.body.urlImagen,
    });
    res.send(
      {
        massage: 'Actualizar usuario: '+ req.params.id, 
        result
      });
    res.end();
  };
export const EliminarUsuario = async (req: Request, res: Response) => {
 const result =  await AdminSchema.remove({_id: req.params.id});
    res.send({
      massage: 'Eliminar usuario: '+ req.params.id,
      result
    
    });
   
  };

  