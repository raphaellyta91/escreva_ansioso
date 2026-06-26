import Diario from '../models/diario.js';

export function abrirDiario(req, res) {
  res.render('pages/diario');
}

export async function salvarDiario(req, res) {
  try {
    const { situacao, emocao, intensidade } = req.body;

    console.log('Usuario logado:', req.usuario);

    await Diario.create({
      situacao,
      emocao,
      intensidade,
      userId: req.usuario.id
    });

    res.redirect('/historico');

  } catch (erro) {
    console.log('ERRO AO SALVAR DIARIO');
    console.log(erro);

    res.status(500).send('Erro ao salvar diário emocional.');
  }
}

export async function listarDiarios(req, res) {
  try {

    const diarios = await Diario.findAll({
      where: {
        userId: req.usuario.id
      },
      order: [['createdAt', 'DESC']]
    });

    res.render('pages/historico', { diarios });

  } catch (erro) {
    console.log('ERRO AO LISTAR DIARIOS');
    console.log(erro);

    res.status(500).send('Erro ao listar histórico.');
  }
}

export async function abrirEditarDiario(req, res) {
  try {

    const diario = await Diario.findOne({
      where: {
        id: req.params.id,
        userId: req.usuario.id
      }
    });

    if (!diario) {
      return res.status(404).send('Registro não encontrado.');
    }

    res.render('pages/editarDiario', { diario });

  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao abrir edição.');
  }
}

export async function atualizarDiario(req, res) {
  try {

    const { situacao, emocao, intensidade } = req.body;

    const diario = await Diario.findOne({
      where: {
        id: req.params.id,
        userId: req.usuario.id
      }
    });

    if (!diario) {
      return res.status(404).send('Registro não encontrado.');
    }

    await diario.update({
      situacao,
      emocao,
      intensidade
    });

    res.redirect('/historico');

  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao atualizar diário.');
  }
}

export async function removerDiario(req, res) {
  try {

    const diario = await Diario.findOne({
      where: {
        id: req.params.id,
        userId: req.usuario.id
      }
    });

    if (!diario) {
      return res.status(404).send('Registro não encontrado.');
    }

    await diario.destroy();

    res.redirect('/historico');

  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao excluir diário.');
  }
}