import { Request, Response } from 'express';
import { Professor } from '../models/Professor';

export const createProfessor = async (req: Request, res: Response) => {
  const professor = await Professor.create(req.body);
  res.status(201).json(professor);
};

export const getProfessores = async (_req: Request, res: Response) => {
  const professores = await Professor.findAll();
  res.json(professores);
};

export const getProfessorById = async (req: Request, res: Response) => {
  const professor = await Professor.findByPk(req.params.id);
  if (!professor) return res.status(404).json({ error: 'Professor não encontrado' });
  res.json(professor);
};

export const updateProfessor = async (req: Request, res: Response) => {
  const professor = await Professor.findByPk(req.params.id);
  if (!professor) return res.status(404).json({ error: 'Professor não encontrado' });
  await professor.update(req.body);
  res.json(professor);
};

export const deleteProfessor = async (req: Request, res: Response) => {
  const professor = await Professor.findByPk(req.params.id);
  if (!professor) return res.status(404).json({ error: 'Professor não encontrado' });
  await professor.destroy();
  res.status(204).send();
};