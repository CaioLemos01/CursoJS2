// Declaração de função (Function hoisting)
function falarOi() {
    console.log('Oi');
}
falarOi();

// First-Class Object
// Function expression
const callFunction = function() {
    falarOi();
}
callFunction();

// Arrow Function

const arrowFunction = () => {
    console.log('Esse é um exemplo de arrow function!');
}
arrowFunction();

// Dentro de objeto

const obj = {
    function() {
        console.log('Eu também sou um tipo de função!');
    }
}
obj.function();