import { connection } from "../database/connection.js";
import { filmes } from "../model/filmes.js";
import path from "path";

export const getIndex = async (req, res) => {
  try {
    //   const listFilmes = await connection.query("SELECT * FROM filmes",{
    //       model: filmes
    //   });
    const listFilmes = await filmes.findAll();
    res.render("index.ejs", {
      listFilmes,
    });
  } catch (err) {
    res.send(error.message);
  }
};

export const getDetalhes = async (req, res) => {
  try {
    const id = req.params.id;
    const filmesDetalhes = await filmes.findByPk(id);
    res.render("detalhes.ejs", { filmesDetalhes });
  } catch (err) {
    req.send(error.message);
  }
};
