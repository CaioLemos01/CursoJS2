function receiveNumber(x) {
    try {
        if (x % 3 === 0 && x % 5 === 0) return 'FizzBuzz';
        if (x % 3 === 0) return 'Fizz';
        if (x % 5 === 0) return 'Buzz';
        return x;
    } catch {
        console.log(x)
    }
}

for (let i = 0; i <= 100; i ++) {
    console.log(i, receiveNumber(i));
}