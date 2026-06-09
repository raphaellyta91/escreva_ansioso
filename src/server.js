import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

import sequelize from './config/database.js';
import pageRoutes from './routes/pageRoutes.js';
import diarioRoutes from './routes/diarioRoutes.js';
import mensagemRoutes from './routes/mensagemRoutes.js';
import fatoRoutes from './routes/fatoRoutes.js';
import criseRoutes from './routes/criseRoutes.js';
import acolhedorRoutes from './routes/acolhedorRoutes.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';

import './models/mensagem.js';
import './models/fato.js';
import './models/diario.js';
import './models/crise.js';
import './models/acolhedor.js';
import './models/user.js';

dotenv.config();

const app = express();
const PORT = process.env.EXPRESS_PORT || 3000;
const HOST = process.env.EXPRESS_HOST || 'localhost';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(pageRoutes);
app.use(diarioRoutes);
app.use(mensagemRoutes);
app.use(fatoRoutes);
app.use(criseRoutes);
app.use(authRoutes);
app.use(acolhedorRoutes);

try {
  await sequelize.authenticate();
  console.log('Banco conectado com sucesso!');

  // ALTERAR APENAS TEMPORARIAMENTE
  await sequelize.sync();
  //await sequelize.sync({ alter: true }); 
  console.log('Tabelas sincronizadas com sucesso!');

  app.listen(PORT, HOST, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });

} catch (erro) {
  console.log('Erro ao conectar ou sincronizar o banco:', erro);
}