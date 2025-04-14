export function verificarSenhaForte(senha: string): boolean {
     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
     return regex.test(senha);
 }
 
 export function converterParaBinario(numero: number): string {
     return numero.toString(2);
 }
 
 export function mediaArray(numeros: number[]): number {
     if (!numeros.length) return 0;
     const soma = numeros.reduce((acc, val) => acc + val, 0);
     return soma / numeros.length;
 }
 
 export function ehPar(numero: number): boolean {
     return numero % 2 === 0;
 }
 
 export function validarCEP(cep: string): boolean {
     return /^\d{8}$/.test(cep);
 }
 
 export function contarPalavras(texto: string): number {
     return texto.trim().split(/\s+/).length;
 }
 
 // Controller da API (exemplo de endpoint)
 import { Request, Response } from 'express';
 
 export const apiSaudacao = (req: Request, res: Response) => {
     res.json({ mensagem: "Olá, bem vindo a API" });
 };