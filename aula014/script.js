// IEEE 754-2008

let num1 = 0.6 // Number
let num2 = 0.3 // Number

num1 += num2

console.log(num1) // 0.8999... Versão bugada
console.log(Number(num1.toFixed(2))) // Versão correta

/**
* Outro Modo
* num1 = ((num1 * 100) + (num2 * 100)) / 100
*/

let num3 = 10 // Number
let num4 = 10.2930483 // Number

console.log(num3.toString(2)) // Binário
console.log(num3.toFixed(2)) // Número casas decimais que serão exibidas
console.log(Number.isInteger(num3)) // Verifica se uma variável é um número inteiro
console.log(Number.isNaN(num3)) // Verifica se uma variável não é um número inteiro