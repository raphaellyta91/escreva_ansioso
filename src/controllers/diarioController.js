import { Diario } from '../models/index.js';

export function abrirDiario(req, res) {
  res.render('pages/diario');
}

export async function salvarDiario(req, res) {
  try {
    const { situacao, emocao, intensidade } = req.body;

    await Diario.create({
      situacao,
      emocao,
      intensidade
    });

    res.redirect('/historico');
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao salvar diário.');
  }
}

export async function listarDiarios(req, res) {
  try {
    const diarios = await Diario.findAll();

    res.render('pages/historico', { diarios });
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao listar histórico.');
  }
}