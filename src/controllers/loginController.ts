import { Request, Response } from 'express';
import { Aluno } from '../models/Aluno';
import { Professor } from '../models/Professor';

export const login = async (req: Request, res: Response): Promise<any> => {
    const { siape, matricula, senha } = req.body;

    try {
        if (siape && senha) {
            const professor = await Professor.findOne({ where: { siape, senha } });
            if (professor) {
                return res.json({
                    mensagem: 'Login de professor bem-sucedido',
                    tipo: 'professor',
                    usuario: professor
                });
            } else {
                return res.status(401).json({ erro: 'SIAPE ou senha inválidos.' });
            }
        }

        if (matricula && senha) {
            const aluno = await Aluno.findOne({ where: { matricula, senha } });
            if (aluno) {
                return res.json({
                    mensagem: 'Login de aluno bem-sucedido',
                    tipo: 'aluno',
                    usuario: aluno
                });
            } else {
                return res.status(401).json({ erro: 'Matrícula ou senha inválidos.' });
            }
        }

        return res.status(400).json({ erro: 'Credenciais insuficientes.' });

    } catch (error) {
        console.error('Erro no login:', error);
        return res.status(500).json({ erro: 'Erro interno no servidor.' });
    }
};