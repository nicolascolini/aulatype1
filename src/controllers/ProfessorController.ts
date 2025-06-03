import { Request, Response } from 'express';
import { Professor } from '../models/Professor';
// Ajuste conforme a estrutura do seu projeto

export const createProfessor = async (req: Request, res: Response): Promise<any> => {
  const professor = await Professor.create(req.body);
  return res.status(201).json(professor);
};

export const getProfessores = async (_req: Request, res: Response): Promise<any> => {
  const professores = await Professor.findAll();
  return res.json(professores);
};

export const getProfessorById = async (req: Request, res: Response): Promise<any> => {
  const professor = await Professor.findByPk(req.params.id);
  if (!professor) {
    return res.status(404).json({ error: 'Professor não encontrado' });
  }
  return res.json(professor);
};

export const updateProfessor = async (req: Request, res: Response): Promise<any> => {
  const professor = await Professor.findByPk(req.params.id);
  if (!professor) {
    return res.status(404).json({ error: 'Professor não encontrado' });
  }
  await professor.update(req.body);
  return res.json(professor);
};

export const deleteProfessor = async (req: Request, res: Response): Promise<any> => {
  const professor = await Professor.findByPk(req.params.id);
  if (!professor) {
    return res.status(404).json({ error: 'Professor não encontrado' });
  }
  await professor.destroy();
  return res.status(204).send();
};
