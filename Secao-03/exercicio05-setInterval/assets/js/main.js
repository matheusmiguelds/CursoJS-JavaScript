const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function(event) {
    alert('Cliquei no iniciar');
});

function mostrarHora() {
    const data = new Date();
    return data.toTimeString('pt-br', {
        hour12: false
    });
}

console.log(mostrarHora());