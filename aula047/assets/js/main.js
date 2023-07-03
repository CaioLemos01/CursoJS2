const stopwatch = document.querySelector('#stopwatch');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');

const stopwatch_color = getComputedStyle(document.documentElement).getPropertyValue('--stopwatch_color')
const stopwatch_paused_color = getComputedStyle(document.documentElement).getPropertyValue('--stopwatch_paused_color');

const standardTime = '00:00:00'
let seconds = 0;

function getSecondsHour(second) {
    const time = new Date(second * 1000);
    return time.toLocaleString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC'
    })
}

let timer;

function startTimer() {
    timer = setInterval(function() {
        seconds++;
        stopwatch.innerHTML = getSecondsHour(seconds);
    }, 1000)

}

start.addEventListener('click', function() {
    stopwatch.style.color = stopwatch_color
    clearInterval(timer);
    startTimer();
})

pause.addEventListener('click', function() {
    if (stopwatch.innerHTML !== standardTime) {
        stopwatch.style.color = stopwatch_paused_color
        clearInterval(timer);
    }
})

reset.addEventListener('click', function() {
    stopwatch.style.color = stopwatch_color
    clearInterval(timer);
    seconds = 0;
    stopwatch.innerHTML = standardTime
})
