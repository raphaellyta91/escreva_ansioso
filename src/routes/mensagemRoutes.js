import express from 'express';

import {
  abrirMensagem,
  salvarMensagem,
  listarMensagens,
  abrirEditarMensagem,
  atualizarMensagem,
  removerMensagem
} from '../controllers/mensagemController.js';

import { verificarToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/nao-envie-agora', verificarToken, abrirMensagem);
router.post('/nao-envie-agora', verificarToken, salvarMensagem);

router.get('/mensagens', verificarToken, listarMensagens);

router.get('/mensagens/:id/editar', verificarToken, abrirEditarMensagem);
router.post('/mensagens/:id/atualizar', verificarToken, atualizarMensagem);
router.post('/mensagens/:id/excluir', verificarToken, removerMensagem);

export default router;