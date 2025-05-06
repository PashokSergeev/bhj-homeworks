const tooltips = document.getElementsByClassName('has-tooltip');
for (const tooltip of tooltips) {
    tooltip.addEventListener('click', (e) => {
        e.preventDefault();
        if (tooltip.childNodes.length < 2) {
            const tooltipEl = document.createElement('div')
            tooltipEl.classList.add('tooltip', 'tooltip_active');
            tooltipEl.textContent = tooltip.title;
            tooltipEl.setAttribute('style', 'left: 0; top: 21px; position: absolute;width: max-content;');
            tooltip.insertAdjacentElement("afterbegin", tooltipEl);
        } else {
            tooltip.firstElementChild.classList.toggle('tooltip_active');
        }
    })
}