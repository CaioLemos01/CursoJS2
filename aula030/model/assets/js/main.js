const data = new Date();
const result = document.querySelector('#resultado');

function getUserDate(data) {
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const diaSemana = data.getDay();
    const hora = data.getHours();
    const minutes = data.getMinutes();

    return `${getDayOfWeek(diaSemana)}, ${dia} de ${getMonthName(mes)} de ${ano} ${zeroAtRight(hora)}:${zeroAtRight(minutes)}`
}

function zeroAtRight(num) {
    return num >= 10 ? num : `0${num}`;
}

function getDayOfWeek(dia) {
    const weekDay = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    return weekDay[dia];
}

function getMonthName(mes) {
    const monthName = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return monthName[mes];
}

result.innerHTML = getUserDate(data);