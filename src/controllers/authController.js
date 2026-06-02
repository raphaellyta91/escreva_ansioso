import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export function abrirCadastro(req, res) {
  res.render('pages/cadastro');
}

export async function cadastrarUsuario(req, res) {
  try {
    const { nome, email, senha } = req.body;

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    await User.create({
      nome,
      email,
      senha: senhaCriptografada
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

    const usuario = await User.findOne({ where: { email } });

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
        email: usuario.email
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