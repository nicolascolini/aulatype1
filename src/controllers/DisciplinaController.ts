import { Request, Response } from "express";
import { Disciplina } from "../models/Disciplina";
import { emitWarning } from "process";

export const listarDisciplinas = async (req: Request, res: Response) => {

    const disciplinas = await Disciplina.findAll();
    res.json(disciplinas);
}

    export const cadastrarDisciplina = async (req: Request, res: Response) => {

        const { nome } = req.body;

        if (nome) {
            let disciplinaExistente = await Disciplina.findOne({ where: {nome}});
            if (!disciplinaExistente) {
                let novaDisciplina = await Disciplina.create({nome});

                res.status(201);
                res.json({
                    message: "Disciplina cadastrada com sucesso",
                    novaDisciplina
                });

            } else {
                res.status(400).json({error: "Nome da disciplina já existe"});

            }
            }
   
    res.status(400).json({error: "Nome da disciplina não enviado."});
}

// export const atualizarDisciplina = async (req: Request, res: Response) => {
// try {
//     const { disciplinaID } = req.params;
//     const dadosAtualizados = req.body;

//     const disciplina = await Disciplina.findByPk(disciplinaID);
//     if (!disciplina) {
//          res.status(404).json({error: "Aluno não encontrado"});
//     }

//     await disciplina.update(dadosAtualizados, { fields: Object.keys(dadosAtualizados)});

//      res.status(200).json({message: "Disciplina atualizada com sucesso", disciplina});
// } catch (error) {
//     res.status(500).json({message: "Erro ao atualizar Disciplina", error});
// }
// };


