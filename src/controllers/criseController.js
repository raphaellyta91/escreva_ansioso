import Crise from '../models/crise.js';

export function abrirCrise(req, res) {
  res.render('pages/crise');
}

export async function salvarCrise(req, res) {
  try {
    const { situacao, emocao, intensidade } = req.body;

    let acaoSugerida = '';

    if (intensidade >= 8) {
      acaoSugerida = 'Respire por 2 minutos, beba água e espere antes de tomar qualquer decisão.';
    } else if (intensidade >= 5) {
      acaoSugerida = 'Faça uma pausa, escreva o que sente e tente observar os fatos.';
    } else {
      acaoSugerida = 'Continue se observando e faça algo leve para cuidar de você.';
    }

    await Crise.create({
      situacao,
      emocao,
      intensidade,
      acaoSugerida
    });

    res.redirect('/crises');
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao salvar crise.');
  }
}

export async function listarCrises(req, res) {
  try {
    const crises = await Crise.findAll({
      order: [['createdAt', 'DESC']]
    });

    res.render('pages/crises', { crises });
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao listar crises.');
  }
}

export async function abrirEditarCrise(req, res) {
  try {
    const { id } = req.params;
    const crise = await Crise.findByPk(id);

    if (!crise) {
      return res.status(404).send('Crise não encontrada.');
    }

    res.render('pages/editarCrise', { crise });
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao abrir edição.');
  }
}

export async function atualizarCrise(req, res) {
  try {
    const { id } = req.params;
    const { situacao, emocao, intensidade } = req.body;

    const crise = await Crise.findByPk(id);

    if (!crise) {
      return res.status(404).send('Crise não encontrada.');
    }

    let acaoSugerida = '';

    if (intensidade >= 8) {
      acaoSugerida = 'Respire por 2 minutos, beba água e espere antes de tomar qualquer decisão.';
    } else if (intensidade >= 5) {
      acaoSugerida = 'Faça uma pausa, escreva o que sente e tente observar os fatos.';
    } else {
      acaoSugerida = 'Continue se observando e faça algo leve para cuidar de você.';
    }

    await crise.update({
      situacao,
      emocao,
      intensidade,
      acaoSugerida
    });

    res.redirect('/crises');
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao atualizar crise.');
  }
}

export async function removerCrise(req, res) {
  try {
    const { id } = req.params;

    const crise = await Crise.findByPk(id);

    if (!crise) {
      return res.status(404).send('Crise não encontrada.');
    }

    await crise.destroy();

    res.redirect('/crises');
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao excluir crise.');
  }
}