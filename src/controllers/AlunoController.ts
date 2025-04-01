import { Request, Response } from "express";
import { request } from "http";
import { Aluno } from "../models/Aluno";
import server from "../server";

export const listarAlunos = async (req: Request, res: Response) => {
    const alunos = await Aluno.findAll()
     res.json(alunos);
};

export const cadastrarAluno = async (req: Request, res: Response) => {
    const { nome, email, matricula } = req.body;
  
    let novoAluno = await Aluno.create({nome, email, matricula});

    res.status(201).json({
        message: "Aluno cadastrado com sucesso",
        novoAluno
    });
};



export const atualizarAluno = async (req: Request, res: Response) : Promise<any> =>  {

try {
    const {alunoId} = req.params;
    const dadosAtualizados = req.body;
    
    const aluno = await Aluno.findByPk(alunoId);
    
    if(!aluno){
         res.status(400).json({message: "Aluno não encontrado"});
    }else{
        await aluno.update(dadosAtualizados, { fields: Object.keys(dadosAtualizados) });
    
        res.status(200).json({message: "Aluno atualizado", aluno});
    }
    
    return
      

} catch (error) {
     res.status(400).json({message: "Erro ao atualizar"});
}

return
}; 

    export const deletarAluno = async (req: Request, res: Response) => {
        const { alunoId } = req.params;
        let aluno = await Aluno.findByPk(alunoId);

        if (aluno) {
            await aluno.destroy();
             res.json({message: "Aluno deletado com sucesso."});
        }
        
         res.status(404).json({error: "Aluno não encontrado"});
    };

    