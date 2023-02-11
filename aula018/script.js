const pessoa1 = {
    nome: "Caio",
    sobrenome: "Lemos",
    idade: "18"
}

console.log(pessoa1.nome)

const pessoa2 = {
    nome: "Carol",
    sobrenome: "Nogueira",
    idade: "17"
}

console.log(pessoa2.nome)

//----------------------------------------------------------------
// Factory function

function criarPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
}

console.log(criarPessoa("Manuela", "Lima", 18))

//----------------------------------------------------------------

const pessoa4 = {
    nome: "Camilla",
    sobrenome: "Gomes",
    idade: 17,

    fala() {
        console.log(`${this.nome} está mandando um olá`)
    }
}

pessoa4.fala()
