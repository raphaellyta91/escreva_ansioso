import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import User from '../models/user.js';

export function abrirCadastro(req, res) {
  res.render('pages/cadastro');
}

export async function cadastrarUsuario(req, res) {
  try {
    const { nome, email, senha, dicaSenha, perfil } = req.body;

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    await User.create({
      nome,
      email,
      senha: senhaCriptografada,
      dicaSenha,
      perfil
    });

    res.redirect('/login');
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao cadastrar usuário.');
  }
}

export function abrirLogin(req, res) {
  res.render('pages/login');
}

export async function loginUsuario(req, res) {
  try {
    const { email, senha } = req.body;

    const usuario = await User.findOne({
      where: { email }
    });

    if (!usuario) {
      return res.send('Usuário não encontrado.');
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (!senhaCorreta) {
      return res.send('Senha incorreta.');
    }

    const token = jwt.sign(
      {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        perfil: usuario.perfil
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.cookie('token', token, {
      httpOnly: true
    });

    res.redirect('/home');
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao fazer login.');
  }
}

export function logout(req, res) {
  res.clearCookie('token');
  res.redirect('/login');
}

export function abrirEsqueciSenha(req, res) {
  res.render('pages/esqueciSenha', {
    linkReset: null,
    erro: null
  });
}

export async function gerarLinkReset(req, res) {
  try {
    const { email } = req.body;

    const usuario = await User.findOne({
      where: { email }
    });

    if (!usuario) {
      return res.render('pages/esqueciSenha', {
        linkReset: null,
        erro: 'E-mail não encontrado.'
      });
    }

    const token = crypto.randomBytes(20).toString('hex');

    usuario.resetToken = token;
    usuario.resetTokenExpira = new Date(Date.now() + 30 * 60 * 1000);

    await usuario.save();

    const linkReset = `/redefinir-senha/${token}`;

    res.render('pages/esqueciSenha', {
      linkReset,
      erro: null
    });
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao gerar link de redefinição.');
  }
}

export async function abrirRedefinirSenha(req, res) {
  try {
    const { token } = req.params;

    const usuario = await User.findOne({
      where: { resetToken: token }
    });

    if (!usuario || usuario.resetTokenExpira < new Date()) {
      return res.send('Link inválido ou expirado.');
    }

    res.render('pages/redefinirSenha', { token });
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao abrir redefinição de senha.');
  }
}

export async function redefinirSenha(req, res) {
  try {
    const { token } = req.params;
    const { novaSenha } = req.body;

    const usuario = await User.findOne({
      where: { resetToken: token }
    });

    if (!usuario || usuario.resetTokenExpira < new Date()) {
      return res.send('Link inválido ou expirado.');
    }

    const senhaCriptografada = await bcrypt.hash(novaSenha, 10);

    usuario.senha = senhaCriptografada;
    usuario.resetToken = null;
    usuario.resetTokenExpira = null;

    await usuario.save();

    res.redirect('/login');
  } catch (erro) {
    console.log(erro);
    res.status(500).send('Erro ao redefinir senha.');
  }
}