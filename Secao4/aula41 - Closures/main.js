// closures são funções dentro de função
function retornaFuncao() {
    const nome = "Matheus";
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao();
console.dir(funcao());