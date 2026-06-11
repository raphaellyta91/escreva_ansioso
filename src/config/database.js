import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

let sequelize;

if(process.env.MODE_NODE === 'dev'){

    console.log('Modo: ', process.env.MODE_NODE)

    sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: './src/database/bd.sqlite'
    })

}else{

    console.log('Modo: ', process.env.MODE_NODE)
 sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false
});
}

export default sequelize;