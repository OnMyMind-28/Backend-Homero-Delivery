import { Router } from "express";
import express, {  Request, Response } from 'express';
import { ActualizarUsuario, CrearUsuario, EliminarUsuario, ObtenerUsuario, ObtenerUsuarios } from "../controllers/motoristas.controller";


export const routeMotoristas: Router = express.Router();
//GET
routeMotoristas.get('/:id', ObtenerUsuario);

routeMotoristas.get('/', ObtenerUsuarios);
//POST
routeMotoristas.post('/', CrearUsuario);
//PUT
routeMotoristas.put('/:id', ActualizarUsuario);
//DELETE
routeMotoristas.delete('/:id', EliminarUsuario);