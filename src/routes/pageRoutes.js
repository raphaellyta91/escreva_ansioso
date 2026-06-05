import express from 'express';
import { verificarToken } from '../middlewares/authMiddleware.js';
import { limparCache } from '../middlewares/cacheMiddleware.js';
import { validarPerfil } from '../middlewares/perfilMiddleware.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/index');
});

router.get('/home', limparCache, verificarToken, (req, res) => {
  res.render('pages/home', {
    usuario: req.usuario
  });
});

router.get(
  '/area-admin',
  limparCache,
  verificarToken,
  validarPerfil('admin'),
  (req, res) => {
    res.send('Área exclusiva do administrador');
  }
);

router.get(
  '/area-psicologo',
  limparCache,
  verificarToken,
  validarPerfil('psicologo', 'admin'),
  (req, res) => {
    res.send('Área exclusiva para psicólogos e administradores');
  }
);

export default router;