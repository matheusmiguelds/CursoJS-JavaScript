function recursiva(max) {
    if (max > 10) return;
    console.log(max);
    max ++;
    recursiva(max); // Função recursiva se chama (igual laços de repetição)
}

recursiva(1);