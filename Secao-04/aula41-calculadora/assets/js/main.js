// function criaCalculador() {
//     return {
//         // Atrbutos
//         display: document.querySelector('.display'),

//         // Métodos
//         inicia() {
//             this.cliqueBotoes();
//             this.pressionaEnter();
//         },

//         pressionaEnter() {
//             this.display.addEventListener('keyup', e => {
//                 if (e.keyCode === 13) {
//                     this.realizaConta();
//                 }
//             });
//         },
//         clearDisplay() {
//             this.display.value = '';
//         },

//         apagaUm() {
//             this.display.value = this.display.value.slice(0, -1);
//         },

//         realizaConta() {
//             let conta = this.display.value;
            
//             try {
//                 conta = eval(conta);
//                 if(!conta) {
//                     alert('Conta inválida');
//                     return;
//                 }
                
//                 this.display.value = String(conta);
//             } catch(e) {
//                 alert('Conta inválida');
//             }
//         },

//         cliqueBotoes() {
//             document.addEventListener('click', function (e) {
//                 const el = e.target;

//                 if (el.classList.contains('btn-num')) {
//                     this.btnParaDisplay(el.innerText);
//                 }

//                 if (el.classList.contains('btn-clear')) {
//                     this.clearDisplay();
//                 }

//                 if (el.classList.contains('btn-del')) {
//                     this.apagaUm();
//                 }

//                 if (el.classList.contains('btn-eq')){
//                     this.realizaConta();
//                 }
//             }.bind(this));
//         },

//         btnParaDisplay(valor) {
//             this.display.value += valor;
//         },
//     }; 
// }

// const calculadora = criaCalculador();
// calculadora.inicia();

function Calculadora(){
    this.display = document.querySelector('.display');

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target; // botão sendo pressionado
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    }

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode !== 13) return;
            this.realizaConta();
        })
    }

    this.addNumDisplay = (el) => this.display.value += el.innerText;
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);
            if(!conta) {
                alert("Conta inválida");
                return;
            }
            this.display.value = conta;

        } catch(e) {
            alert("Conta inválida");
            return;
        }
    }
}

const calculadora = new Calculadora();
calculadora.inicia();