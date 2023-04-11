function Fibonacci(y) {
    let f1 = 0;
    let f2 = 1;
    const array = [];

    while (Math.max(...array) < y) {
        let accumulator = f1+f2;
        f1 = f2;
        array.push(f1);
        f2 = accumulator;
    }

    const number = array.find(e => e === y);
    return number === y;
}

const number = 232;
const inFibonacci = Fibonacci(number);

if (inFibonacci) {
    console.log('Pertence a sequencia Fibonacci');
} else {
    console.log('Não pertence a sequencia Fibonacci');
}
