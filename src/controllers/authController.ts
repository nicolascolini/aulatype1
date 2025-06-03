import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Aluno } from '../models/Aluno';
import { Professor } from '../models/Professor';

export const login = async (req: Request, res: Response): Promise<any> => {
  const { identificador, senha } = req.body;

  try {
    let usuario: any;
    let tipo: string;

    // Tenta encontrar como aluno (matrícula)
    usuario = await Aluno.findOne({ where: { matricula: identificador } });
    tipo = 'aluno';

    // Se não for aluno, tenta como professor (siape)
    if (!usuario) {
      usuario = await Professor.findOne({ where: { siape: identificador } });
      tipo = 'professor';
    }

    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ mensagem: 'Senha inválida' });
    }

    //  token JWT
    const token = jwt.sign(
      {
        id: usuario.id,
        nome: usuario.nome,
        tipo
      },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' }
    );

    return res.json({
      token,
      mensagem: 'Login realizado com sucesso'
    });

  } catch (error) {
    console.error('Erro no login:', error);
    return res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};
