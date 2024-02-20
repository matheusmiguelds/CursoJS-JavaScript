function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, // this aponta aqui
        sobrenome, // como é igual, não precisa deixar tipo sobrenome: sobrenome

        // Getter - finge ser um ...., podemos usar com (nomecompleto) sem ()
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter - podemos setar um valor
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}` // mesma coisa que p1.nome
        },
        altura,
        peso,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Matheus', 'Miguel', 1.73, 65);
const p2 = criaPessoa('Julia', 'Kimie', 1.69, 55);
console.log(p2.fala('está se pesando'));
console.log(p2.imc());
console.log(p2.nomeCompleto);
p2.nomeCompleto = 'Matheus Miguel da Silva';
console.log(p2.nomeCompleto);

