const alunos = ["Luiz", "Carla", "Júlia", "Marcos"]

console.log(alunos instanceof Array) // Verifica se a variável é um array

delete alunos[0] // Retira um valor do array sem modificar os índices
alunos.shift // Remove um elemento do começo do array

alunos.unshift("Caio") // Adiciona elemento no começo do array
alunos.push("Érica") // Adiciona elemento no final do array
