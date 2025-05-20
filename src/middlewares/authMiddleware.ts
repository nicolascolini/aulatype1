import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  id: number;
  nome: string;
  tipo: 'aluno' | 'professor';
}

declare module 'express' {
  export interface Request {
    usuario?: JwtPayload;
  }
}

export const autenticarToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ mensagem: 'Token não fornecido' });
  }

  const token = authHeader.split(' ')[1]; // Bearer <token>

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    req.usuario = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ mensagem: 'Token inválido ou expirado' });
  }
};

// Middleware para restringir a professores
export const apenasProfessores = (req: Request, res: Response, next: NextFunction) => {
  if (req.usuario?.tipo !== 'professor') {
    return res.status(403).json({ mensagem: 'Acesso restrito aos professores' });
  }
  next();
};
