import request from 'supertest';
import server from '../server';

describe("Testes da API", () => {

    it("Deve retornar uma saudação na rota /saudacao", async () => {
const response = await request(server).get("/saudacao");

expect(response.status).toBe(200);
expect(response.body).toEqual({mensagem: "Olá, bem vindo a API"});
    });
});

describe("Testes da API de Alunos - Atualizar", () => {
    it("Deve atualizar um aluno na rota /atualizarAluno/:alunoId", async () => {
        const alunoId = 1; 
        const dadosAtualizados = {
            nome: "Joao Atualizado",
            email: "joaoatualizado@example.com"
        };
    
        const response = await request(server).put(`/atualizarAluno/${alunoId}`).send(dadosAtualizados);
    
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Aluno atualizado com sucesso");
        expect(response.body.aluno).toHaveProperty("nome", dadosAtualizados.nome);
        expect(response.body.aluno).toHaveProperty("email", dadosAtualizados.email);
    
    });
    
        });