const pessoa = {
    nome: "Matheus",
    sobrenome: "Miguel",
    idade: 20,
    endereco: {
        rua: "Avenida Dona  
        Sophia Rasgulaeff",
        numero: 3222
    }
 };

 //Atribuição via desestruturação
//  const { nome, sobrenome, idade } = pessoa;
const { endereco: { rua, numero } } = pessoa;
 console.log(rua, numero);