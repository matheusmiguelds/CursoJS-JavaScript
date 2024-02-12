function FizzBuzz (num) {
    if (typeof num === typeof 'a') return 'Not a number';
    if (num % 5 === 0 && num % 3 === 0) return 'FizzBuzz';
    if (num % 5 === 0) return 'Fizz';
    if (num % 3 === 0) return 'Buzzz';
    return num; 
}

for (let i = 0; i <= 100; i++) {
    console.log(FizzBuzz(i));
} 