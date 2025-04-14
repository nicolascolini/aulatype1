import {
    verificarSenhaForte,
    converterParaBinario,
    mediaArray,
    ehPar,
    validarCEP,
    contarPalavras,
} from "../controllers/apiController";

console.log("Testes manuais");

// Senha forte
console.log("Senha forte:");
console.log(verificarSenhaForte("Abc@1234"));  // true
console.log(verificarSenhaForte("SenhaFraca")); // false

// Conversão para binário
console.log("Conversão para binário:");
console.log(converterParaBinario(10));  // 1010
console.log(converterParaBinario(255)); // 11111111

// Média de um array
console.log("Média de um array:");
console.log(mediaArray([5, 10, 15]));      // 10
console.log(mediaArray([100, 200, 300]));  // 200

// Par ou ímpar
console.log("Par ou ímpar:");
console.log(ehPar(4)); // true
console.log(ehPar(7)); // false

// Validador de CEP
console.log("Validador de CEP:");
console.log(validarCEP("12345678")); // true
console.log(validarCEP("12a4567"));  // false

// Contador de palavras
console.log("Contador de palavras:");
console.log(contarPalavras("Teste simples"));     // 2
console.log(contarPalavras("Espaços   extras"));  // 2
