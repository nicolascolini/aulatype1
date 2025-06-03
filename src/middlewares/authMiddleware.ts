import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Define a interface do payload do JWT
interface JwtPayload {
  id: number;
  nome: string;
  tipo: 'aluno' | 'professor';
}

// Extende a interface do Request para incluir o usuário
declare module 'express' {
  export interface Request {
    usuario?: JwtPayload;
  }
}

// Middleware para autenticar o token JWT
export const autenticarToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ mensagem: 'Token não fornecido' });
    return;
  }

  const token = authHeader.split(' ')[1]; // Exemplo: "Bearer <token>"

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    req.usuario = decoded;
    next();
  } catch (error) {
    res.status(403).json({ mensagem: 'Token inválido ou expirado' });
    return;
  }
};

// Middleware para restringir o acesso apenas a professores
export const apenasProfessores = (req: Request, res: Response, next: NextFunction): void => {
  if (req.usuario?.tipo !== 'professor') {
    res.status(403).json({ mensagem: 'Acesso restrito aos professores' });
    return;
  }
  next();
};