import { Request, Response } from 'express';
import { Turma } from '../models/Turma';

export const createTurma = async (req: Request, res: Response): Promise<any> => {
  const turma = await Turma.create(req.body);
  return res.status(201).json(turma);
};

export const getTurmas = async (_req: Request, res: Response): Promise<any> => {
  const turmas = await Turma.findAll();
  return res.json(turmas);
};

export const getTurmaById = async (req: Request, res: Response): Promise<any> => {
  const turma = await Turma.findByPk(req.params.id);
  if (!turma) {
    return res.status(404).json({ error: 'Turma não encontrada' });
  }
  return res.json(turma);
};

export const updateTurma = async (req: Request, res: Response): Promise<any> => {
  const turma = await Turma.findByPk(req.params.id);
  if (!turma) {
    return res.status(404).json({ error: 'Turma não encontrada' });
  }
  await turma.update(req.body);
  return res.json(turma);
};

export const deleteTurma = async (req: Request, res: Response): Promise<any> => {
  const turma = await Turma.findByPk(req.params.id);
  if (!turma) {
    return res.status(404).json({ error: 'Turma não encontrada' });
  }
  await turma.destroy();
  return res.status(204).send();
};
