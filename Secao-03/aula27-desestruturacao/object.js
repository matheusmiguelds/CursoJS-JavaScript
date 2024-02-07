const pessoa = {
    nome: "Matheus",
    sobrenome: "Miguel",
    idade: 30,
    endereco: {
        rua: "Av. Brasil",
        numero: "1484"
    }
};

const { nome = 'Não existe', sobrenome, idade, endereco: { rua, numero }, endereco } = pessoa;
console.log(nome, sobrenome, idade, rua, numero, endereco);

// se nn for igual os nomes

const { nome: teste, sobrenome: oi} = pessoa;
console.log(teste, oi);