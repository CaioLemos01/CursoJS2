const nome = "Caio"
const sobrenome = "Lemos"
const peso = 65
const idade = "18"
const alturaEmM = 1.82

let indiceDeMassaCorporal
let anoNascimento

indiceDeMassaCorporal = peso / (alturaEmM * alturaEmM)
anoNascimento = 2022 - idade

// Template String

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso}kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceDeMassaCorporal}`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)