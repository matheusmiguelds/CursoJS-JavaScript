// factory functions

// this sempre se refere a quem chama, no caso p1
function criaPessoa(nome, sobrenome, idade, altura, peso){
    return {
        nome, 
        sobrenome,

        //Getter
         get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' '); // separa
            this.nome = valor.shift(); // adiciona e remove o valor do array
            this.sobrenome = valor.join(' '); // junta o resto
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}.` ;       
        },

        idade: idade,
        altura: altura,
        peso: peso,

        imc() {
            const resultado = peso / (altura * 2);
            return resultado.toFixed(2);
        }
    };
}

const p1 = criaPessoa("Matheus", 'Miguel', 20,  1.73, 64);
/*
console.log(p1.fala("falando sobre JS"));
console.log(p1.imc());

const p2 = criaPessoa("Julia", "Kimie", 18,  1.69, 58);
console.log(p2.fala("falando sobre JS"));
console.log(p2.imc());
*/

// Usando o Get, podemos chamar a function sem ()

// Usando set, podemos alterar quando quiser
p1.nomeCompleto = 'Julia Kimie Prigol';
console.log(p1.nomeCompleto);
console.log(p1.fala("falando sobre JS"));