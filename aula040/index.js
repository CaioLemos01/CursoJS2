const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let n of numbers) {
    if (n % 2 === 0) {
        console.log('Número par')
        continue;
    }
    console.log(typeof(n), n)

    if (n === 19) {
        console.log('19 Encontrado, saindo do laço...')
        break;
    }
}