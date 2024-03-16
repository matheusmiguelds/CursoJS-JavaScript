// defineProperty -> Getter e Setter
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        // value: estoque, // valor
        // writable: true, // pode alterar
        configurable: true, // configurável
        get: function() {   // apenas exibir o valor
            return estoquePrivado;
        },
        set: function(valor) {  // modifica o valor
            if(typeof valor !== 'number'){
                console.log('Bad Value');
                return;
            }
            estoquePrivado = valor;
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    }
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
// p1.estoque = 'O valor que eu quero'
p1.estoque = 500;
console.log(p1.estoque);

const p2 = criaProduto('Cama');
console.log(p2);
p2.nome = 'Qualquer coisa';
console.log(p2.nome);