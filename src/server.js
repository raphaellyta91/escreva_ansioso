import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

import sequelize from './config/database.js';
import pageRoutes from './routes/pageRoutes.js';
import diarioRoutes from './routes/diarioRoutes.js';

import './models/diario.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(pageRoutes);
app.use(diarioRoutes);

try {
  await sequelize.authenticate();
  console.log('Banco conectado com sucesso!');

  await sequelize.sync();
  console.log('Tabelas sincronizadas com sucesso!');

  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
} catch (erro) {
  console.log('Erro ao conectar ou sincronizar o banco:', erro);
}