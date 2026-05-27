import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  // process.env.DB_NAME,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    username:   process.env.DB_USER || 'root',
    password:   process.env.DB_PASSWORD || 'BemVindo!',


  }
);

async function criarBD(){
  await sequelize.query("CREATE DATABASE IF NOT EXISTS ANSIOSO;")

}

criarBD()

export default sequelize;