import express from 'express';
import { verificarToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/index');
});

router.get('/home', verificarToken, (req, res) => {
  res.render('pages/home', {
    usuario: req.usuario
  });
});

export default router;