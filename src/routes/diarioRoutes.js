import express from 'express';

import {
  abrirDiario,
  salvarDiario,
  listarDiarios,
  abrirEditarDiario,
  atualizarDiario,
  removerDiario
} from '../controllers/diarioController.js';

import { verificarToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/diario', verificarToken, abrirDiario);
router.post('/diario', verificarToken, salvarDiario);

router.get('/historico', verificarToken, listarDiarios);

router.get('/diario/:id/editar', verificarToken, abrirEditarDiario);
router.post('/diario/:id/atualizar', verificarToken, atualizarDiario);
router.post('/diario/:id/excluir', verificarToken, removerDiario);

export default router;