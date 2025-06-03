import { Request, Response } from "express";
import { request } from "http";
import { Aluno } from "../models/Aluno";
import server from "../server";

export const listarAlunos = async (req: Request, res: Response): Promise<any> => {
    const alunos = await Aluno.findAll();
    return res.json(alunos);
};

export const cadastrarAluno = async (req: Request, res: Response): Promise<any> => {
    const { nome, email, matricula } = req.body;

    const novoAluno = await Aluno.create({ nome, email, matricula });

    return res.status(201).json({
        message: "Aluno cadastrado com sucesso",
    
    });
};

export const atualizarAluno = async (req: Request, res: Response): Promise<any> => {
    try {
        const { alunoId } = req.params;
        const dadosAtualizados = req.body;

        const aluno = await Aluno.findByPk(alunoId);

        if (!aluno) {
            return res.status(400).json({ message: "Aluno não encontrado" });
        }

        await aluno.update(dadosAtualizados, { fields: Object.keys(dadosAtualizados) });

        return res.status(200).json({ message: "Aluno atualizado", aluno });

    } catch (error) {
        return res.status(400).json({ message: "Erro ao atualizar" });
    }
};

export const deletarAluno = async (req: Request, res: Response): Promise<any> => {
    const { alunoId } = req.params;

    const aluno = await Aluno.findByPk(alunoId);

    if (aluno) {
        await aluno.destroy();
        return res.json({ message: "Aluno deletado com sucesso." });
    }

    return res.status(404).json({ error: "Aluno não encontrado" });
};
