const buttonList = document.getElementsByClassName('dropdown__value')

for (const button of buttonList) {
    button.addEventListener('click', dropdownListActive)
}

function dropdownListActive() {
    this.nextElementSibling.classList.toggle('dropdown__list_active')
}

const dropdownLinks = document.getElementsByClassName('dropdown__link')
for (const link of dropdownLinks) {
    const buttonValue = link.parentElement.parentElement.previousElementSibling;
    link.addEventListener('click', (e) => {
        buttonValue.textContent = link.textContent;
        e.preventDefault();
        dropdownListActive.bind(buttonValue)()
    })
}