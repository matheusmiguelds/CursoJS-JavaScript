const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

document.addEventListener('click', function (e) {
    const el = e.target;
    
    if (el.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.classList.remove('pausado');
        relogio.innerHTML = '00:00:00'
        segundos = 0;
    }

    if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado');
    }
});

function criaHoraDoSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-br', { hour12: false, timeZone: 'GMT' });
}

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraDoSegundos(segundos);
    }, 1000);
}

console.log(criaHoraDoSegundos(10));