import User from './User.js';
import Diario from './Diario.js';
import Mensagem from './Mensagem.js';

User.hasMany(Diario);
Diario.belongsTo(User);

User.hasMany(Mensagem);
Mensagem.belongsTo(User);

export {
  User,
  Diario,
  Mensagem
};