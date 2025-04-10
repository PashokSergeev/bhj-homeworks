const timerFunction = function () {
    const timer = document.getElementById("timer");
    if (timer.textContent === '00:00:00') {
        // const fileDownload = document.getElementById("fileDownload");
        // fileDownload.click();
        alert('Вы победили в конкурсе!');
        timer.textContent = '00:00:59';
    } else {
        let newTimer = timer.textContent.slice(-2);
        if (newTimer <= 10) {
            timer.textContent = '00:00:0' + (newTimer - 1);
        } else {
            timer.textContent = '00:00:' + (newTimer - 1);
        }
    }
}

setInterval(timerFunction, 1000);