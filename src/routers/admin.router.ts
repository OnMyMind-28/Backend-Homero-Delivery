import { Router } from "express";
import express, {  Request, Response } from 'express';
import { ActualizarUsuario, CrearUsuario, EliminarUsuario, ObtenerUsuario, ObtenerUsuarios } from "../controllers/admin.controller";


export const routeAdmin: Router = express.Router();
//GET
routeAdmin.get('/:id', ObtenerUsuario);

routeAdmin.get('/', ObtenerUsuarios);
//POST
routeAdmin.post('/', CrearUsuario);
//PUT
routeAdmin.put('/:id', ActualizarUsuario);
//DELETE
routeAdmin.delete('/:id', EliminarUsuario);