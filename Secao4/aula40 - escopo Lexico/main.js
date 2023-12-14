const nome = "Matheus";

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = "Miguel";
    falaNome();
}

usaFalaNome();