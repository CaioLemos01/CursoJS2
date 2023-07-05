// IIFE - Immediately Invoked Function Expression

(function (idade, altura) {
    function criaPessoa(nome, sobrenome) {
        return nome + ' ' + sobrenome;
    }
    console.log(criaPessoa('Caio', 'Lemos'));
    console.log(idade, altura);
})(18, 1.80);