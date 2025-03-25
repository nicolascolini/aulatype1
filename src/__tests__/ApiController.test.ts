import request from 'supertest';
import server from '../server';

describe("Testes da API", () => {

    it("Deve retornar uma saudação na rota /saudacao", async () => {
const response = await request(server).get("/saudacao");

expect(response.status).toBe(200);
expect(response.body).toEqual({mensagem: "Olá, bem vindo a API"});
    });
});