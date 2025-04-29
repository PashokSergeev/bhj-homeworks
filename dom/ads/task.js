setInterval(()=>{
    const rotators = document.getElementsByClassName('rotator');
    for (const rotator of rotators) {
        let rotatorCaseActive = rotator.getElementsByClassName('rotator__case_active')[0]

        rotatorCaseActive.classList.remove('rotator__case_active');
        rotatorCaseActive = rotatorCaseActive.nextElementSibling;
        if (!rotatorCaseActive){
            rotatorCaseActive = rotator.firstElementChild;
        }
        rotatorCaseActive.style.color = rotatorCaseActive.dataset.color;
        rotatorCaseActive.classList.add('rotator__case_active');
    }
}, 1000);