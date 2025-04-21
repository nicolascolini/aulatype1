import { Request, Response } from 'express';
import { Turma } from '../models/Turma';

export const createTurma = async (req: Request, res: Response) => {
  const turma = await Turma.create(req.body);
  res.status(201).json(turma);
};

export const getTurmas = async (_req: Request, res: Response) => {
  const turmas = await Turma.findAll();
  res.json(turmas);
};

export const getTurmaById = async (req: Request, res: Response) => {
  const turma = await Turma.findByPk(req.params.id);
  if (!turma) return res.status(404).json({ error: 'Turma não encontrada' });
  res.json(turma);
};

export const updateTurma = async (req: Request, res: Response) => {
  const turma = await Turma.findByPk(req.params.id);
  if (!turma) return res.status(404).json({ error: 'Turma não encontrada' });
  await turma.update(req.body);
  res.json(turma);
};

export const deleteTurma = async (req: Request, res: Response) => {
  const turma = await Turma.findByPk(req.params.id);
  if (!turma) return res.status(404).json({ error: 'Turma não encontrada' });
  await turma.destroy();
  res.status(204).send();
};
