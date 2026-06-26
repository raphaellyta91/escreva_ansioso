import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  senha: {
    type: DataTypes.STRING,
    allowNull: false
  },

  dicaSenha: {
    type: DataTypes.STRING,
    allowNull: true
  },

  perfil: {
    type: DataTypes.ENUM('admin', 'psicologo', 'usercomum'),
    allowNull: false,
    defaultValue: 'usercomum'
  },

  resetToken: {
    type: DataTypes.STRING,
    allowNull: true
  },

  resetTokenExpira: {
    type: DataTypes.DATE,
    allowNull: true
  }, 
   userId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

export default User;