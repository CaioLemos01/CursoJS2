const frutas = ['Maçã', 'Banana', 'Pera', 'Uva', 'Morango', 'Pêssego'];

for (let i in frutas) {
    console.log(frutas[i]);
}

const person = {
    nome: 'Caio',
    sobrenome: 'Lemos',
    idade: '18'
}

for (let chaves in person) {
    console.log(chaves);
}

for (let atributes in person) {
    console.log(atributes, person[atributes]);
}