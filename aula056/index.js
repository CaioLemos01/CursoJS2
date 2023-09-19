function createPerson(name, lastName, email, password) {
    return {
        name,
        lastName,
        get completeName() {
            return `${this.name} ${this.lastName}`;
        },
        email,
        password,
        set firstName(completeName) {
            completeName = completeName.split(' ');
            this.name = completeName.shift();
            this.lastName = completeName.join(' ');
        }
    }
}

var p1 = createPerson('Caio', 'Lemos', 'email@gmail.com', 12234235345);
console.log(p1.completeName);
console.log(p1.email);
console.log(p1.password);
p1.firstName = 'Caio Lemos Peixoto Martins';
console.log(p1.name);
console.log(p1.lastName);
