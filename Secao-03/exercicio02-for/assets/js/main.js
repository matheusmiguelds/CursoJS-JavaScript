const container = document.querySelector('.container');
const divHtml = document.createElement("div");
divHtml.classList.add("teste");

const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' }
]

for (const elemento of elementos) {
    const inserir = document.createElement(elemento.tag);
    inserir.innerHTML = elemento.texto;
    divHtml.appendChild(inserir);
}

container.appendChild(divHtml);