function returnDate(date) {
    if (date && !(date instanceof Date)) {
        throw new TypeError('O valor esperado é uma instância de Date');
    }
    if (!date) {
        date = new Date();
    }

    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
}

try {
    const date = new Date('08-17-2004 17:08:04');
    const hour = returnDate(date);
    console.log(hour)
} catch(error) {
    // Tratar erro
    // console.log(error);
} finally {
    console.log('Tenha um bom dia!');
}