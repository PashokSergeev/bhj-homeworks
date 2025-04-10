const cookie = document.getElementById('cookie');
cookie.onclick = () => {
    const clickerCounter = document.getElementById('clicker__counter');
    clickerCounter.textContent = parseInt(clickerCounter.textContent) + 1;
    cookie.width += 20;
    setTimeout(() => {
        cookie.width -= 20;
    }, 100);

}