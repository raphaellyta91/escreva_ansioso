export function validarPerfil(...perfisPermitidos) {
  return (req, res, next) => {
    if (!req.usuario) {
      return res.redirect('/login');
    }

    if (!perfisPermitidos.includes(req.usuario.perfil)) {
      return res.status(403).send('Acesso negado. Você não tem permissão.');
    }

    next();
  };
}