function criaCalculadora() {
    return {
        display: document.querySelector(".display"),
        btnClear: document.querySelector(".btn-clear"),

        inicia() {
            this.cliqueBotoes();
            this.enter();
        },

        enter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.result();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        result() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if(!conta) {
                    alert("Conta inválida");
                }

                this.display.value = conta;

            } catch (e) {
                alert("Conta inválida");
            }
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains("btn-clear")){
                    this.clearDisplay();
                }

                if(el.classList.contains("btn-del")){
                    this.deleteOne();
                }

                if(el.classList.contains("btn-eq")){
                    this.result();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();