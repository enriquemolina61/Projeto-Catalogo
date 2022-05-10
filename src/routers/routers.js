import express from "express";
import {
  getIndex,
  getDetalhes,
  getDelete,
  getCriar,
  postCriar,
  getEditar,
  postEditar,

} from "../controller/Controllador.js";
export const routers = express.Router();

routers.get("/", getIndex);
routers.get("/detalhes/:id", getDetalhes);
routers.get("/delete/:id", getDelete);
routers.get("/criar", getCriar);
routers.post("/criar", postCriar);
routers.get("/editar/:id", getEditar);
routers.post("/editar/:id", postEditar);