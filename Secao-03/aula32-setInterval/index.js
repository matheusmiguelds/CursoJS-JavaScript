function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-br', {
        hour12: false
    })
}

const timer = setInterval(() => console.log(mostraHora()), 1000);

setTimeout(() => {
    clearInterval(timer);
}, 5000);

setTimeout(() => {
    console.log("Olá, mundo!")
}, 2000);