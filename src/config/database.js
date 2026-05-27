// import { Sequelize } from 'sequelize';
// import dotenv from 'dotenv';

// dotenv.config();

// const sequelize = new Sequelize(
//   {
//     host: process.env.DB_HOST,
//     dialect: 'mysql',
//    username:   process.env.DB_USER || 'root',
//     password:   process.env.DB_PASSWORD || 'BemVindo!',
//     database:   process.env.DB_NAME || 'ansioso'
// }
// );
  
// export async function criarBD(){
// await sequelize.query(  'CREATE DATABASE IF NOT EXISTS ANSIOSO;');
//  console.log('Banco de dados criado ou já existe.');}


// criarBD()

// export default sequelize;

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

export default sequelize;

