import Diario from '../models/diario.js';

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
    res.status(500).send('Erro ao salvar diário emocional.');
  }
}

export async function listarDiarios(req, res) {
  try {
    const diarios = await Diario.findAll({
      order: [['createdAt', 'DESC']]
    });

    res.render('pages/historico', { diarios });
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao listar histórico.');
  }
}

export async function abrirEditarDiario(req, res) {
  try {
    const { id } = req.params;

    const diario = await Diario.findByPk(id);

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
    const { id } = req.params;
    const { situacao, emocao, intensidade } = req.body;

    const diario = await Diario.findByPk(id);

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
    const { id } = req.params;

    const diario = await Diario.findByPk(id);

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