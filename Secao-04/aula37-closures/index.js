function retornaFuncao() {
    const nome = 'Matheus';
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao()
console.log(funcao());