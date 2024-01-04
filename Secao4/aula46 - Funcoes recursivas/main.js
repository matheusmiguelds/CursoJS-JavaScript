function recursiva(max) {
    if (max >= 10) return;
    max++;

    console.log(max);
    recursiva(max);
}

recursiva(0);

// Função recursiva, chama ela mesmo na função. Vai ser executada até completar os parâmetros, CUIDADO com função infinita.