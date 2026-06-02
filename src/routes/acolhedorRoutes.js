import express from 'express';

import {
  abrirCadastroAcolhedor,
  salvarAcolhedor,
  listarAcolhedores
} from '../controllers/acolhedorController.js';

const router = express.Router();

router.get('/acolhedor/cadastro', abrirCadastroAcolhedor);
router.post('/acolhedor/cadastro', salvarAcolhedor);

router.get('/acolhedores', listarAcolhedores);

export default router;