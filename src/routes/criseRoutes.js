import express from 'express';

import {
  abrirCrise,
  salvarCrise,
  listarCrises,
  abrirEditarCrise,
  atualizarCrise,
  removerCrise
} from '../controllers/criseController.js';

const router = express.Router();

router.get('/crise', abrirCrise);
router.post('/crise', salvarCrise);

router.get('/crises', listarCrises);

router.get('/crises/:id/editar', abrirEditarCrise);
router.post('/crises/:id/atualizar', atualizarCrise);
router.post('/crises/:id/excluir', removerCrise);

export default router;