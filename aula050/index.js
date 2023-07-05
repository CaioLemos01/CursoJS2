function multiply(multiplicator) {
    return (n) => n * multiplicator;
}

const double = multiply(2);
const triple = multiply(3);

console.log(double(8));
console.log(triple(8));