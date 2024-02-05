// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // criação do objeto date // 01/01/1970

// const data = new Date(2024, 1, 5, 19, 3, 0); // (ano, mes(começa do 0), dia, hora, minutos, segundos)

// const data = new Date('2021-02-13 20:20:59'); // Outro formato aceitado, + utilizado
// const data = new Date(1707171506169); // Outro formato aceitado, + utilizado
// console.log('Dia', data.getDate());
// console.log('Mes', data.getMonth()); // começa com zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minutos', data.getMinutes());
// console.log('Segundos', data.getSeconds());
// console.log('Dia semana', data.getDay()); // 0 - domingo    6 - sábado
// console.log(data.toString()); // Em formato do EUA
// console.log(Date.now()); // Usar no new date - deu 1707171506169

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const minutos = zeroEsquerda(data.getMinutes());
    const segundos = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);