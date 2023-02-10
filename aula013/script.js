//              01234567
let umaSting = "Um texto";
let umaSting2 = "Um \"texto\""

console.log(umaSting)
console.log(umaSting2)

console.log(umaSting[0]) // Fora do range retorna erro
console.log(umaSting.charAt(0)) // Fora do range retorna vazio

console.log(umaSting.concat(". Olá")) // Concatena valores
console.log(umaSting + ". Olá") // Concatena valores
console.log(`${umaSting}. Olá`) // Concatena valores

console.log(umaSting.indexOf("o", 6)) // Segundo valor do parâmetro é o início da busca
console.log(umaSting.indexOf("texto"))
console.log(umaSting.lastIndexOf("texto")) // Mesma função do de cima porém inicia a busca do fim

console.log(umaSting.replace("Um", "Outro"))
console.log(umaSting.replace(/t/g, "*"))

console.log(umaSting.slice(3, 8))
console.log(umaSting.slice(-5)) // console.log(umaSting.slice(-5)) = console.log(umaSting.length - 5)

console.log(umaSting.split(" "))