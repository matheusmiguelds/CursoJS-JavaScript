// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Mostra o valor
        writable: false, // Posso alterar?
        configurable: true // Posso apagar/ reconfigurar?
    });

    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true, // Mostra a chave
    //     value: estoque, // Mostra o valor
    //     writable: true, // Posso alterar?
    //     configurable: false // Posso apagar/ reconfigurar?
    // });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Mostra a chave
            value: nome, // Mostra o valor
            writable: true, // Posso alterar?
            configurable: true // Posso apagar/ reconfigurar?
        },
        preco: {
            enumerable: true, // Mostra a chave
            value: preco, // Mostra o valor
            writable: true, // Posso alterar?
            configurable: true // Posso apagar/ reconfigurar?
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1.nome); // Variavel publica
// p1.estoque = 50000;
// console.log(p1);
console.log(Object.keys(p1)); // Enumerable está como true, assim mostra