import express from 'express';

import {
  abrirCadastro,
  cadastrarUsuario,
  abrirLogin,
  loginUsuario,
  logout,
  abrirEsqueciSenha,
  gerarLinkReset,
  abrirRedefinirSenha,
  redefinirSenha
} from '../controllers/authController.js';

const router = express.Router();

router.get('/cadastro', abrirCadastro);
router.post('/cadastro', cadastrarUsuario);

router.get('/login', abrirLogin);
router.post('/login', loginUsuario);

router.get('/logout', logout);

router.get('/esqueci-senha', abrirEsqueciSenha);
router.post('/esqueci-senha', gerarLinkReset);

router.get('/redefinir-senha/:token', abrirRedefinirSenha);
router.post('/redefinir-senha/:token', redefinirSenha);

export default router;