function sum(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new SyntaxError('O valor digitado não é um número!')
    }
    return x + y;
}

try {
    console.log(sum(1, 54))
    console.log(sum(1, '54'))
} catch (error) {
    console.log(error); // Evite mostrar o erro para o usuário!!
    console.log('Alguma coisa que o usuário entenda')
}