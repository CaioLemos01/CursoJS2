// function createCalculator() {
//     return {
//         display: document.querySelector('.display'),

//         startCalculator() {
//             this.pressEnter();
//             this.clickButton();
//         },

//         pressEnter() {
//             this.display.addEventListener('keyup', (e) => {
//                 if(e.keyCode === 13) {
//                     this.calculate();
//                 }
//             })
//         },

//         clickButton() {
//             document.addEventListener('click', (e) => {
//                 const element = e.target;
//                 if(element.classList.contains('btn-num')) {
//                     this.addDisplay(element.innerText);
//                 } else if(element.classList.contains('btn-clear')) {
//                     this.clear();
//                 } else if(element.classList.contains('btn-clean')) {
//                     this.clean();
//                 } else if(element.classList.contains('btn-eq')) {
//                     this.calculate();
//                 }
//             })
//         },

//         addDisplay(value) {
//             this.display.value += value;
//         },
        
//         clear() {
//             this.display.value = '';
//         },

//         clean() {
//             this.display.value = this.display.value.slice(0, -1);
//         },

//         calculate() {
//             let count = this.display.value;
            
//             try {
//                 count = eval(count);
                
//                 if(!count) {
//                     alert('Conta Inválida');
//                     return;
//                 };
//             } catch (e) {
//                 alert('Conta Inválida');
//                 return;
//             }

//             this.display.value = String(count);
//         },

//     }
// }

// const calculator = createCalculator();
// calculator.startCalculator();

function Calculator() {
        this.display = document.querySelector('.display');

        this.startCalculator = () => {
            this.pressEnter();
            this.clickButton();
        };

        this.pressEnter = () => {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) this.calculate();
                else return;
            })
        };

        this.clickButton = () => {
            document.addEventListener('click', e => {
                const element = e.target;
                if(element.classList.contains('btn-num')) this.addDisplay(element.innerText);
                else if(element.classList.contains('btn-clear')) this.clear();
                else if(element.classList.contains('btn-clean')) this.clean();
                else if(element.classList.contains('btn-eq')) this.calculate();
            })
        };

        this.addDisplay = value => {
            this.display.value += value
            this.display.focus();
        };
        
        this.clear = () => this.display.value = '';

        this.clean = () => this.display.value = this.display.value.slice(0, -1);

        this.calculate = () => {
            let count = this.display.value;
            
            try {
                count = eval(count);
                
                if(!count) {
                    alert('Conta Inválida');
                    return;
                };
            } catch (e) {
                alert('Conta Inválida');
                return;
            }

            this.display.value = String(count);
        };
}

const createCalculator = new Calculator();
createCalculator.startCalculator();