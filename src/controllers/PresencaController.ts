import { Request, Response } from 'express';
import { Presenca } from '../models/Presenca';

export const createPresenca = async (req: Request, res: Response) => {
  const presenca = await Presenca.create(req.body);
  res.status(201).json(presenca);
};

export const getPresencas = async (_req: Request, res: Response) => {
  const presencas = await Presenca.findAll();
  res.json(presencas);
};

export const getPresencaById = async (req: Request, res: Response): Promise<any> => {
  const presenca = await Presenca.findByPk(req.params.id);
  if (!presenca) return res.status(404).json({ error: 'Presença não encontrada' });
  res.json(presenca);
};

export const updatePresenca = async (req: Request, res: Response): Promise<any> => {
  const presenca = await Presenca.findByPk(req.params.id);
  if (!presenca) return res.status(404).json({ error: 'Presença não encontrada' });
  await presenca.update(req.body);
  res.json(presenca);
};

export const deletePresenca = async (req: Request, res: Response): Promise<any> => {
  const presenca = await Presenca.findByPk(req.params.id);
  if (!presenca) return res.status(404).json({ error: 'Presença não encontrada' });
  await presenca.destroy();
  res.status(204).send();
};
