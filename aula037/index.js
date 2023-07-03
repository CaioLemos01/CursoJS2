const nome = ['Caio', 'Luiz', 'Beatriz', 'Carla', 'Júlia'];

for (let valor of nome) {
    console.log(valor);
}

console.log('----------------------------------------------------------------')

nome.forEach(function(element, index) {
    console.log(element, index);
});