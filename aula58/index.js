// Constructor Function -> Object
// Factory Function -> Object
// Factory: createPerson
// Constructor: Person (new)

function Person(name, lastName) {
    // Atributos ou métodos privados
    const ID = '#1928391';
    const metodoInterno = () => {
        console.log('');
    }

    // Atributos ou métodos públicos
    this.nome = name;
    this.sobrenome = lastName;
    this.metodo = () => {
        console.log(`${this.name}: sou um método`);
    };
}

const p1 = new Person('Caio', 'Lemos Peixoto Martins');
const p2 = new Person('Maria', 'Luisa Ferreira');

console.log(p1.nome);
console.log(p2.nome);
p2.metodo();