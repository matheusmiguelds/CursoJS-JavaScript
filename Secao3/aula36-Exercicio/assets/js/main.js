const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

iniciar.addEventListener("click", function (event) {
});

pausar.addEventListener("click", function (event) {
    alert("Cliquei no pausar");
});

zerar.addEventListener("zerar", function (event) {
    alert("Cliquei no zerar");
});

const data = new Date(0);

setInterval(function(){
    console.log(data);
}, 5000);
