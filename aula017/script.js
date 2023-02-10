function soma(x = 0, y = 0) {
    const resultado = x + y
    return resultado
}

console.log(soma(1, 5))

//----------------------------------------------------------------

const raiz = function (n) {
    return Math.pow(n, 1 / 2)
};

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))

//----------------------------------------------------------------

const raiz2 = n => Math.pow(n, 1 / 2)

console.log(raiz(36))
console.log(raiz(49))
console.log(raiz(64))