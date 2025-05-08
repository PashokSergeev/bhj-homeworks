const tooltips = document.getElementsByClassName('has-tooltip');
for (const tooltip of tooltips) {
    tooltip.addEventListener('click', (e) => {
        e.preventDefault();
        const {x,y} = tooltip.getBoundingClientRect();
        console.log(tooltip.nextElementSibling);
        if (tooltip.nextElementSibling === null || !tooltip.nextElementSibling.classList.contains('tooltip')) {
            const tooltipEl = document.createElement('div')
            tooltipEl.classList.add('tooltip', 'tooltip_active');
            tooltipEl.textContent = tooltip.title;

            tooltipEl.setAttribute('style', `left: ${x}px; top: ${y+21}px; position: absolute; width: max-content; `);
            tooltip.insertAdjacentElement("afterend", tooltipEl);
        } else {
            tooltip.nextElementSibling.classList.toggle('tooltip_active');
        }
    })
}