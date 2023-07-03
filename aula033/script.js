const pessoa = {
    name: 'Caio',
    lastName:'Lemos',
    age: '18',
}

const {name: nome = '', age = ''} = pessoa
console.log(nome, age)