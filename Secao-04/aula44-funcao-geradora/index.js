function* geradora1() {
    // Código qualquer...
    yield 'Valor 01';
    // Código qualquer
    yield 'Valor 02';
    // Código qualquer
    yield 'Valor 03';  // yield funciona como um return, mas podemos usar vários
}

const g1 = geradora1();
// console.log(g1.next().value); // mostra na tela e vai para o próximo
// console.log(g1.next().value); 
// console.log(g1.next()); 
// console.log(g1.next()); // Quando acabar o yield, retorna undefined

for (let valor of g1) {
    console.log(valor);
}

// function* geradora2() { // gerador infinito
//     let i = 0;

//     while(true) {
//         yield i;
//         i++;
//     }
// }

// const g2 = geradora2(); 
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next(1000).value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3(); // Podemos pegar parte de outros gerador
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
    console.log(valor);
}

function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    };

    // ...

    yield function() {
        console.log('Vim do y2');
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();