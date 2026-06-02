import express from 'express';

import {
  abrirCadastro,
  cadastrarUsuario,
  abrirLogin,
  loginUsuario,
  logout
} from '../controllers/authController.js';

const router = express.Router();

router.get('/cadastro', abrirCadastro);
router.post('/cadastro', cadastrarUsuario);

router.get('/login', abrirLogin);
router.post('/login', loginUsuario);

router.get('/logout', logout);

export default router;