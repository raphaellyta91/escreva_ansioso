import express from 'express';
import {
  abrirDiario,
  salvarDiario,
  listarDiarios
} from '../controllers/diarioController.js';

const router = express.Router();

router.get('/diario', abrirDiario);
router.post('/diario', salvarDiario);
router.get('/historico', listarDiarios);

export default router;