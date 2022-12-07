import  { Request, Response } from 'express';
import { UsuariosSchema } from '../model/usuarios.schema';


export const ObtenerUsuario = async (req: Request, res: Response) => {
   const result =  await UsuariosSchema.find({_id: req.params.id});
   res.send(result.length === 1 ? result [0] : {});
   res.end();
  };
  export const ObtenerUsuarios = (req: Request, res: Response) => {
    UsuariosSchema.find().then(result =>{
      res.send(result);
      res.end();
    })
     
    };

export const CrearUsuario = async (req: Request, res: Response) => {
    const nuevoUsuario = new UsuariosSchema(
     // req.body ->se puede solo agregando esto o atribito por atribito como se muestra en el comentario
      
      { 
        id:req.body.id,
        nombre:req.body.nombre, 
        apellido:req.body.apellido,
        mail:req.body.mail,
        password:req.body.password,
        ordenes:req.body.ordenes,
        pago:req.body.pago
      
    }
    );
    const result =  await nuevoUsuario.save();
    res.send(result);
    res.end();
  };

export const ActualizarUsuario = async (req: Request, res: Response) => {
 
  const result = await UsuariosSchema.findByIdAndUpdate({_id: req.params.id },
    {
      id:req.body.id,
      nombre:req.body.nombre, 
      apellido:req.body.apellido,
      mail:req.body.mail,
      password:req.body.password,
      ordenes:req.body.ordenes,
      pago:req.body.pago
    });
    res.send(
      {
        msg: 'Actualizar usuario: '+ req.params.id, 
        result
      });
    res.end();
  };
export const EliminarUsuario = async (req: Request, res: Response) => {
 const result =  await UsuariosSchema.deleteOne({_id: req.params.id});
    res.send({
      msg: 'Eliminar usuario: '+ req.params.id,
      result
    
    });
   
  };

  