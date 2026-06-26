import Mensagem from '../models/mensagem.js';

export function abrirMensagem(req, res) {
  res.render('pages/naoEnvieAgora');
}

export async function salvarMensagem(req, res) {
  try {
    const { texto } = req.body;

    await Mensagem.create({
      texto,
      userId: req.usuario.id
    });

    res.redirect('/mensagens');
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao salvar mensagem.');
  }
}

export async function listarMensagens(req, res) {
  try {
    const mensagens = await Mensagem.findAll({
      where: {
        userId: req.usuario.id
      },
      order: [['createdAt', 'DESC']]
    });

    res.render('pages/mensagens', { mensagens });
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao listar mensagens.');
  }
}

export async function abrirEditarMensagem(req, res) {
  try {
    const { id } = req.params;

    const mensagem = await Mensagem.findOne({
      where: {
        id,
        userId: req.usuario.id
      }
    });

    if (!mensagem) {
      return res.status(404).send('Mensagem não encontrada.');
    }

    res.render('pages/editarMensagem', { mensagem });
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao abrir edição da mensagem.');
  }
}

export async function atualizarMensagem(req, res) {
  try {
    const { id } = req.params;
    const { texto } = req.body;

    const mensagem = await Mensagem.findOne({
      where: {
        id,
        userId: req.usuario.id
      }
    });

    if (!mensagem) {
      return res.status(404).send('Mensagem não encontrada.');
    }

    await mensagem.update({ texto });

    res.redirect('/mensagens');
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao atualizar mensagem.');
  }
}

export async function removerMensagem(req, res) {
  try {
    const { id } = req.params;

    const mensagem = await Mensagem.findOne({
      where: {
        id,
        userId: req.usuario.id
      }
    });

    if (!mensagem) {
      return res.status(404).send('Mensagem não encontrada.');
    }

    await mensagem.destroy();

    res.redirect('/mensagens');
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao excluir mensagem.');
  }
}