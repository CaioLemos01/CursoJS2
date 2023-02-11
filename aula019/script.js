let a = {
    nome: "Caio",
    sobrenome: "Vasconcelos"
}

let b = a
let c = { ...a } // Spread

b.nome = "Maria"
c.nome = "Mariana"

console.log(a, b, c)