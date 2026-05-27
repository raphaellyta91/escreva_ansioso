import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/index');
});

router.get('/crise', (req, res) => {
  res.render('pages/crise');
});

router.get('/fato', (req, res) => {
  res.render('pages/fato');
});

router.get('/nao-envie-agora', (req, res) => {
  res.render('pages/naoEnvieAgora');
});

export default router;