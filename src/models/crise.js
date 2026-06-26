import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Crise = sequelize.define('Crise', {
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
  acaoSugerida: {
    type: DataTypes.TEXT,
    allowNull: false
  },
   userId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

export default Crise;