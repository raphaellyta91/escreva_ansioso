import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Acolhedor = sequelize.define('Acolhedor', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contato: {
    type: DataTypes.STRING,
    allowNull: false
  },
  disponibilidade: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mensagem: {
    type: DataTypes.TEXT,
    allowNull: false
  },
   userId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

export default Acolhedor;