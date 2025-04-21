import { Request, Response } from 'express';
import { Nota } from '../models/Nota';

class NotaController {
  async create(req: Request, res: Response) {
    const nota = await Nota.create(req.body);
    res.status(201).json(nota);
  }

  async index(req: Request, res: Response) {
    const notas = await Nota.findAll();
    res.json(notas);
  }

  async show(req: Request, res: Response) {
    const nota = await Nota.findByPk(req.params.id);
    if (!nota) return res.status(404).json({ error: 'Nota não encontrada' });
    res.json(nota);
  }

  async update(req: Request, res: Response) {
    const nota = await Nota.findByPk(req.params.id);
    if (!nota) return res.status(404).json({ error: 'Nota não encontrada' });
    await nota.update(req.body);
    res.json(nota);
  }

  async delete(req: Request, res: Response) {
    const nota = await Nota.findByPk(req.params.id);
    if (!nota) return res.status(404).json({ error: 'Nota não encontrada' });
    await nota.destroy();
    res.status(204).send();
  }
}

export default new NotaController();