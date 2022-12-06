import { Router } from "express";
import express from "express";
import { ObtenerPago, ObtenerPagos, RealizarPago } from "../controllers/pago.controllers";



export const routePago: Router = express.Router();
//GET
routePago.get('/:id', ObtenerPago);

routePago.get('/', ObtenerPagos);
//POST
routePago.post('/', RealizarPago);
//PUT
