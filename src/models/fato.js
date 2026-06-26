import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Fato = sequelize.define('Fato', {
  fatoReal: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  interpretacao: {
    type: DataTypes.TEXT,
    allowNull: false
  },
   userId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

export default Fato;