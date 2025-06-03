import { Request, Response, NextFunction } from 'express';
export const permitirAcesso = (tiposPermitidos: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const tipoUsuario = req.usuario?.tipo;

    if (!tipoUsuario || !tiposPermitidos.includes(tipoUsuario)) {
      res.status(403).json({ mensagem: 'Acesso negado' });
      return;  // apenas para interromper a execução, não para retornar o Response
    }

    next();
  };
};