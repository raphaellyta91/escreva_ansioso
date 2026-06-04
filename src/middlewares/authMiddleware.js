import jwt from 'jsonwebtoken';

export function verificarToken(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.redirect('/login');
  }

  try {
    const usuario = jwt.verify(token, process.env.JWT_SECRET);

    req.usuario = usuario;

    next();
  } catch (erro) {
    return res.redirect('/login');
  }
}