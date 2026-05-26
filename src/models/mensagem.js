import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Mensagem = sequelize.define('Mensagem', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  texto: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

export default Mensagem;