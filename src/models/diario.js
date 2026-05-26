import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Diario = sequelize.define('Diario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  situacao: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  emocao: {
    type: DataTypes.STRING,
    allowNull: false
  },

  intensidade: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Diario;