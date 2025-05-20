import { Request, Response, NextFunction } from 'express';

export const permitirAcesso = (tiposPermitidos: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const tipoUsuario = req.user?.tipo;

    if (!tipoUsuario || !tiposPermitidos.includes(tipoUsuario)) {
      return res.status(403).json({ mensagem: 'Acesso negado' });
    }

    next();
  };
};
