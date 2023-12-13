const paragrafos = document.querySelectorAll('p');

// OBS: não podemos usar '-' como no css. Jeito certo: backgroundColor (camelCase). Jeito errado: background-color.

const estilosBody = getComputedStyle(document.body); // Pegou todos os atributos do body
const backgroundColorBody = estilosBody.backgroundColor; // Aqui específicamos quais atributos queremos

for (let p of paragrafos) {
    p.style.backgroundColor = backgroundColorBody; // Faz com que todos paragrafos fiquem com o background igual do body.
    p.style.color = "#FFFFFF"; // Deixa todas cores do paragrafos branca.
}