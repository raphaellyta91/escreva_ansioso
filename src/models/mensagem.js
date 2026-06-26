import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Mensagem = sequelize.define('Mensagem', {

  texto: {
    type: DataTypes.TEXT,
    allowNull: false
  },
   userId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }, 
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }

});

export default Mensagem;