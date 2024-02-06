// function zeroEsquerda(num) {
//     return num >= 10 ? num : `0${num}`
// }

// function formataData(data) {
//     const dia = zeroEsquerda(data.getDate());
//     const ano = zeroEsquerda(data.getFullYear());
//     const hora = zeroEsquerda(data.getHours());
//     const minuto = zeroEsquerda(data.getMinutes());

//     getDiaSemana(data.getDay());
//     getNomeMes(data.getMonth());
//     return dataTexto = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} ${hora}:${minuto}`;
// }

// function getDiaSemana(dia) {
//     switch (dia) {
//         case 0:
//             diaSemanaTexto = 'Domingo';
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'Segunda-feira';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'Terça-feira';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'Quarta-feira';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'Quinta-feira';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Sexta-feira';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'Sábado';
//             return diaSemanaTexto;
//     }
// }

// function getNomeMes(mes) {
//     switch (mes) {
//         case 0:
//             mesTexto = 'Janeiro';
//             return mesTexto
//         case 1:
//             mesTexto = 'Fevereiro';
//             return mesTexto;
//         case 2:
//             mesTexto = 'Março';
//             return mesTexto;
//         case 3:
//             mesTexto = 'Abril';
//             return mesTexto;
//         case 4:
//             mesTexto = 'Maio';
//             return mesTexto;
//         case 5:
//             mesTexto = 'Junho';
//             return mesTexto;
//         case 6:
//             mesTexto = 'Julho';
//             return mesTexto;
//         case 7:
//             mesTexto = 'Agosto';
//             return mesTexto;
//         case 8:
//             mesTexto = 'Setembro';
//             return mesTexto;
//         case 9:
//             mesTexto = 'Outubro';
//             return mesTexto;
//         case 10:
//             mesTexto = 'Novembro';
//             return mesTexto;
//         case 11:
//             mesTexto = 'Dezembro';
//             return mesTexto;
//     }
// }

// const data = new Date();
// let dataTexto;
// let mesTexto;
// let diaSemanaTexto;
// const dataEvento = document.querySelector("#data");
// const textoFinal = formataData(data);
// dataEvento.innerHTML = textoFinal;

const dataEvento = document.querySelector('#data');
const data = new Date();
const opcoes = {
   dateStyle: 'full',
   timeStyle: 'short'
};

dataEvento.innerHTML = data.toLocaleString('pt-br', opcoes );