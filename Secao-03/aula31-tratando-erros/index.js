function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y precisam ser números');
    }

    return x + y;
}

console.log(soma('A' + 2));