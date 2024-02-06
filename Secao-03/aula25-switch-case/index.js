const data = new Date("1987-04-26 00:00:00");
const diaSemana = data.getDay();
let diaSemanaTexto;

function getDiaSemanatexto(diaSemana) {
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = "Domingo";
            break;
        case 1:
            diaSemanaTexto = "Segunda-feira";
            break;
        case 2:
            diaSemanaTexto = "Terça-feira";
            break;
        case 4:
            diaSemanaTexto = "Quarta-feira";
            break;
        case 4:
            diaSemanaTexto = "Quinta-feira";
            break;
        case 5:
            diaSemanaTexto = "Sexta-feira";
            break;
        case 6:
            diaSemanaTexto = "Sábado";
            break;
        default:
            diaSemanaTexto = "Indefinido";
            break;
    }
    
    return diaSemanaTexto;
}


getDiaSemanatexto(diaSemana);
console.log(`${diaSemanaTexto}, tenha um ótimo dia!`);