// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso'

const pontuacaoUsuario = 1000;

// if(pontuacaoUsuario >= 1000) {
//     console.log("Usuario VIP");
// } else {
//     console.log("Usuario normal");
// }

const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuario VIP" : "Usuário normal";

const corUsuario = null;
const corPadrao = corUsuario || 'Cor: Preta'; // Se a variavel for nula, vai retornar o "Preta"

console.log(nivelUsuario, corPadrao);

// teste 
const idade = 20;
const maior = idade > 18 ? "Maior de idade" : "Menor de idade";
console.log(maior)