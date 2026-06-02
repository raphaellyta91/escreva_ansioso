import express from 'express';
import { verificarToken } from '../middlewares/authMiddleware.js';

import {
  abrirDiario,
  salvarDiario,
  listarDiarios,
  abrirEditarDiario,
  atualizarDiario,
  removerDiario
} from '../controllers/diarioController.js';

const router = express.Router();

router.get('/diario', abrirDiario);
router.post('/diario', salvarDiario);

router.get('/historico', listarDiarios);

router.get('/diario/:id/editar', abrirEditarDiario);
router.post('/diario/:id/atualizar', atualizarDiario);
router.post('/diario/:id/excluir', removerDiario);


router.get('/diario', verificarToken, abrirDiario);
router.post('/diario', verificarToken, salvarDiario);
router.get('/historico', verificarToken, listarDiarios);

export default router;