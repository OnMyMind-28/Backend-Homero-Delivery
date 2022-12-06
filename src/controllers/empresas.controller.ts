import  { Request, Response } from 'express';
import { EmpresasSchema } from '../model/empresas.schema';


export const ObtenerEmpresa = async (req: Request, res: Response) => {
   const result =  await EmpresasSchema.find({_id: req.params.id});
   res.send(result.length === 1 ? result [0] : {});
   res.end();
  };
  export const ObtenerEmpresas = (req: Request, res: Response) => {
    EmpresasSchema.find().then(result =>{
      res.send(result);
      res.end();
    })
     
    };

export const CrearEmpresas = async (req: Request, res: Response) => {
    const nuevoEmpresas = new EmpresasSchema(
     // req.body ->se puede solo agregando esto o atribito por atribito como se muestra en el comentario
     {
      nombreEmpresa: req.body.nombreEmpresa,
      logo: req.body.logo,
      banner: req.body.banner,
      descripcion: req.body.descripcion,
      productos:req.body.productos
     }
    );
    const result =  await nuevoEmpresas.save();
    res.send(result);
    res.end();
  };

export const ActualizarEmpresas = async (req: Request, res: Response) => {
  const result = await EmpresasSchema.updateOne({_id: req.params.id },
    {
      nombreEmpresa: req.body.nombreEmpresa,
      logo: req.body.logo,
      banner: req.body.banner,
      descripcion: req.body.descripcion,
      productos:req.body.productos
    });
    res.send(
      {
        massage: 'Actualizar Empresas: '+ req.params.id, 
        result
      });
    res.end();
  };
export const EliminarEmpresas = async (req: Request, res: Response) => {
 const result =  await EmpresasSchema.remove({_id: req.params.id});
    res.send({
      massage: 'Eliminar Empresa: '+ req.params.id,
      result
    
    });
   
  };