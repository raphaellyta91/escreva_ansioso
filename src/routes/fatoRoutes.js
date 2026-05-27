import express from 'express';

import {
  abrirFato,
  salvarFato,
  listarFatos,
  abrirEditarFato,
  atualizarFato,
  removerFato
} from '../controllers/fatoController.js';

const router = express.Router();

router.get('/fato', abrirFato);
router.post('/fato', salvarFato);

router.get('/fatos', listarFatos);

router.get('/fatos/:id/editar', abrirEditarFato);
router.post('/fatos/:id/atualizar', atualizarFato);
router.post('/fatos/:id/excluir', removerFato);

export default router;