import request from 'supertest';
import server from '../server';

describe("Testes da API", () => {
    it("Deve retornar uma saudação na rota /saudacao", async () => {
        const response = await request(server).get("/saudacao");

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ mensagem: "Olá, bem vindo a API" });
    });
});

describe("Testes da API de Alunos - Atualizar", () => {
    it("Deve atualizar um aluno na rota /atualizarAluno/:alunoId", async () => {
        const alunoId = 1;
        const dadosAtualizados = {
            nome: "Joao Atualizado",
            email: "joaoatualizado@example.com"
        };

        const response = await request(server)
            .put(`/atualizarAluno/${alunoId}`)
            .send(dadosAtualizados);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Aluno atualizado com sucesso");
        expect(response.body.aluno).toHaveProperty("nome", dadosAtualizados.nome);
        expect(response.body.aluno).toHaveProperty("email", dadosAtualizados.email);
    });
});

import {
    verificarSenhaForte,
    converterParaBinario,
    mediaArray,
    ehPar,
    validarCEP,
    contarPalavras
} from "../controllers/apiController";

describe("Funções da API Controller", () => {
    test("Senha forte", () => {
        expect(verificarSenhaForte("Abc@1234")).toBe(true);
        expect(verificarSenhaForte("fraca")).toBe(false);
    });

    test("Conversão para binário", () => {
        expect(converterParaBinario(10)).toBe("1010");
        expect(converterParaBinario(255)).toBe("11111111");
    });

    test("Média de array", () => {
        expect(mediaArray([10, 20, 30])).toBe(20);
    });

    test("Par ou ímpar", () => {
        expect(ehPar(4)).toBe(true);
        expect(ehPar(7)).toBe(false);
    });

    test("Validador de CEP", () => {
        expect(validarCEP("12345678")).toBe(true);
        expect(validarCEP("12a4567")).toBe(false);
    });

    test("Contador de palavras", () => {
        expect(contarPalavras("Olá mundo")).toBe(2);
        expect(contarPalavras("Espaços   extras")).toBe(2);
    });
});