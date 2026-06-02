import Acolhedor from '../models/acolhedor.js';

export function abrirCadastroAcolhedor(req, res) {
  res.render('pages/cadastroAcolhedor');
}

export async function salvarAcolhedor(req, res) {
  try {
    const { nome, contato, disponibilidade, mensagem } = req.body;

    await Acolhedor.create({
      nome,
      contato,
      disponibilidade,
      mensagem
    });

    res.redirect('/acolhedores');
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao cadastrar acolhedor.');
  }
}

export async function listarAcolhedores(req, res) {
  try {
    const acolhedores = await Acolhedor.findAll({
      order: [['createdAt', 'DESC']]
    });

    res.render('pages/acolhedores', { acolhedores });
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao listar acolhedores.');
  }
}