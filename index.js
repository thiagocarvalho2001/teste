// index.js
console.log("Iniciando testes...");
const soma = 2 + 2;

if (soma === 4) {
    console.log("SUCESSO: A matemática ainda funciona.");
    process.exit(0); // 0 = Sucesso no mundo Unix/Windows
} else {
    console.error("FALHA: O universo colapsou.");
    process.exit(1); // 1 = Erro (o Jenkins pega isso)
}