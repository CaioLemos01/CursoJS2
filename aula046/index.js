function returnHour() {
    let date = new Date();

    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function() {
    console.log(returnHour());
}, 1000);


setTimeout(function() {
    clearInterval(timer)
}, 5100);

setTimeout(function() {
    console.log('Acabou o tempo!');
}, 5500);