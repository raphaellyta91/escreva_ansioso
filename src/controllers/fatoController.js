import Fato from '../models/fato.js';

export function abrirFato(req, res) {
  res.render('pages/fato');
}

export async function salvarFato(req, res) {
  try {
    const { fatoReal, interpretacao } = req.body;

    await Fato.create({
      fatoReal,
      interpretacao
    });

    res.redirect('/fatos');
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao salvar fato ou interpretação.');
  }
}

export async function listarFatos(req, res) {
  try {
    const fatos = await Fato.findAll({
      order: [['createdAt', 'DESC']]
    });

    res.render('pages/fatos', { fatos });
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao listar fatos.');
  }
}

export async function abrirEditarFato(req, res) {
  try {
    const { id } = req.params;

    const fato = await Fato.findByPk(id);

    if (!fato) {
      return res.status(404).send('Registro não encontrado.');
    }

    res.render('pages/editarFato', { fato });
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao abrir edição.');
  }
}

export async function atualizarFato(req, res) {
  try {
    const { id } = req.params;
    const { fatoReal, interpretacao } = req.body;

    const fato = await Fato.findByPk(id);

    if (!fato) {
      return res.status(404).send('Registro não encontrado.');
    }

    await fato.update({
      fatoReal,
      interpretacao
    });

    res.redirect('/fatos');
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao atualizar registro.');
  }
}

export async function removerFato(req, res) {
  try {
    const { id } = req.params;

    const fato = await Fato.findByPk(id);

    if (!fato) {
      return res.status(404).send('Registro não encontrado.');
    }

    await fato.destroy();

    res.redirect('/fatos');
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao excluir registro.');
  }
}