import express from 'express';

import {
  abrirCrise,
  salvarCrise,
  listarCrises,
  abrirEditarCrise,
  atualizarCrise,
  removerCrise
} from '../controllers/criseController.js';

import { verificarToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/crise', verificarToken, abrirCrise);
router.post('/crise', verificarToken, salvarCrise);

router.get('/crises', verificarToken, listarCrises);

router.get('/crises/:id/editar', verificarToken, abrirEditarCrise);
router.post('/crises/:id/atualizar', verificarToken, atualizarCrise);
router.post('/crises/:id/excluir', verificarToken, removerCrise);

export default router;