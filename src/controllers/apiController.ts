import { Request, Response } from 'express';

export const apiSaudacao = (req: Request, res: Response) => {
     res.json({ mensagem: "Olá, bem vindo a API"});
};


