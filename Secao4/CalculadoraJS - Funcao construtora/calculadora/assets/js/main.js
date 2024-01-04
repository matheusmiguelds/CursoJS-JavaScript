function Calculadora() {
    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');

    this.inicia = function () {
        this.cliqueBotoes();
        this.enter();
    };

    this.enter = function () {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.result();
            }
        });
    };

    this.clearDisplay = function () {
        this.display.value = '';
    };

    this.deleteOne = function() {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.result = function() {
        let conta = this.display.value;

        try {
            conta = eval(conta);
            if (!conta) {
                alert("Conta inválida");
            }

            this.display.value = conta;
        } catch (e) {
            alert("Conta inválida");
        }
    };

    this.cliqueBotoes = function () {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if (el.classList.contains("btn-clear")) {
                this.clearDisplay();
            }

            if (el.classList.contains("btn-del")) {
                this.deleteOne();
            }

            if (el.classList.contains("btn-eq")) {
                this.result();
            }
        });

    };

    this.btnParaDisplay = function (valor) {
        this.display.value += valor;
    };

}

const calculadora = new Calculadora();
calculadora.inicia();