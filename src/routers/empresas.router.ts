import { Router } from "express";
import express, {  Request, Response } from 'express';
import { ActualizarEmpresas, CrearEmpresas, EliminarEmpresas, ObtenerEmpresa, ObtenerEmpresas } from "../controllers/empresas.controller";


export const routeEmpresas: Router = express.Router();
//GET
routeEmpresas.get('/:id', ObtenerEmpresa);

routeEmpresas.get('/', ObtenerEmpresas);
//POST
routeEmpresas.post('/', CrearEmpresas);
//PUT
routeEmpresas.put('/:id', ActualizarEmpresas);
//DELETE
routeEmpresas.delete('/:id', EliminarEmpresas);