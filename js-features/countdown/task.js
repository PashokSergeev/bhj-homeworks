const timerFunction = function (){
    const timer = document.getElementById("timer");
    if (timer.textContent === '0') {
        alert('Вы победили в конкурсе!');
        timer.textContent = 59;
    }else{
        timer.textContent -= 1;
    }
}

setInterval(timerFunction, 1000);