import express from 'express';

import {
  abrirMensagem,
  salvarMensagem,
  listarMensagens,
  abrirEditarMensagem,
  atualizarMensagem,
  removerMensagem
} from '../controllers/mensagemController.js';

const router = express.Router();

router.get('/nao-envie-agora', abrirMensagem);
router.post('/nao-envie-agora', salvarMensagem);

router.get('/mensagens', listarMensagens);

router.get('/mensagens/:id/editar', abrirEditarMensagem);
router.post('/mensagens/:id/atualizar', atualizarMensagem);
router.post('/mensagens/:id/excluir', removerMensagem);

export default router;