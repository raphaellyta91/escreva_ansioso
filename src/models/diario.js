import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Diario = sequelize.define('Diario', {
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
  },

  userId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

export default Diario;