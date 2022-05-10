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
    res.send(error.message);
  }
};

export const getDelete = async (req, res) => {
  try {
    const id = req.params.id;
    await connection.query(`DELETE FROM filmes WHERE id= ${id}`);
    res.redirect("/");
  } catch (err) {
    res.send(error.message);
  }
};

export const getCriar = (req, res) => {
  res.render("criar.ejs");
};
export const postCriar = async (req, res) => {
  
  const { nome, diretor, img, duracao, ano, iframe } = req.body;
  try {
    
    if (
      nome == false ||
      diretor == false ||
      img == false ||
      duracao == false ||
      ano == false ||
      iframe == false
    ) {
      res.send("Todos os campos são obrigatórios!");
    } else {
      await filmes.create({ nome, diretor, img, duracao, ano, iframe });
      res.render("index.ejs");
    }
  } catch (err) {
    res.send(err.message);
  }
};

export const getEditar = async (req, res) => {
  try {
    const id = req.params.id;
    const filmeAtual = await filmes.findByPk(id);
    res.render("editar.ejs", {
      filmeAtual,
    });
  } catch (err) {
    res.send(err.message);
  }
};

export const postEditar = async (req, res) => {
  try {
    const { nome, diretor, img, duracao, ano, iframe } = req.body;
    if (
      nome == false ||
      diretor == false ||
      img == false ||
      duracao == false ||
      ano == false ||
      iframe == false
    ) {
      res.send("Todos os campos são obrigatórios!");
    } else {
      await filmes.update(
        {
          nome: nome,
          diretor: diretor,
          img: img,
          duracao: duracao,
          ano: ano,
          iframe: iframe,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.redirect("/");
    }
  } catch (err) {
    res.send(err.message);
  }
};
