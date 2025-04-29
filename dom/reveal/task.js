function inVisible(element) {
    const {bottom, top} = element.getBoundingClientRect();
    if (bottom < 0) {
        return false;
    }
    return top <= window.innerHeight;
}

function showVisible() {
    for (let reveal of document.getElementsByClassName('reveal')) {
        if (inVisible(reveal)) {
            reveal.classList.add('reveal_active')
        } else {
            reveal.classList.remove('reveal_active')
        }
    }
}

window.addEventListener('scroll', showVisible);
