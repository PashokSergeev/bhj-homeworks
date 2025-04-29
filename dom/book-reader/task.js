const bookControlFontSize = document.getElementsByClassName('book__control_font-size')[0]
for (const fontSizeElement of bookControlFontSize.getElementsByClassName('font-size')) {
    fontSizeElement.addEventListener('click', (e) => {
        e.preventDefault();
        let fontSizeActive = bookControlFontSize.getElementsByClassName('font-size_active')[0]
        console.log(`fontSizeActive: ${fontSizeActive}`)
        fontSizeActive.classList.remove('font-size_active')
        fontSizeElement.classList.add('font-size_active')
        if (fontSizeElement.dataset.size === 'big') {
            document.getElementById('book').classList.add('book_fs-big')
            document.getElementById('book').classList.remove('book_fs-small')
        } else if (fontSizeElement.dataset.size === 'small') {
            document.getElementById('book').classList.add('book_fs-small')
            document.getElementById('book').classList.remove('book_fs-big')
        } else {
            document.getElementById('book').classList.remove('book_fs-small')
            document.getElementById('book').classList.remove('book_fs-big')
        }
    })
}

const bookControlColor = document.getElementsByClassName('book__control_color')[0]
for (const colorElement of bookControlColor.getElementsByClassName('color')) {
    colorElement.addEventListener('click', (e) => {
        e.preventDefault();
        let colorElementActive = bookControlColor.getElementsByClassName('color_active')[0]
        console.log(`colorElementActive: ${colorElementActive}`)
        colorElementActive.classList.remove('color_active')
        colorElement.classList.add('color_active')
        if (colorElement.dataset.textColor === 'black') {
            document.getElementById('book').classList.add('book_color-black')
            document.getElementById('book').classList.remove('book_color-gray')
            document.getElementById('book').classList.remove('book_color-whitesmoke')
        } else if (colorElement.dataset.textColor === 'gray') {
            document.getElementById('book').classList.add('book_color-gray')
            document.getElementById('book').classList.remove('book_color-black')
            document.getElementById('book').classList.remove('book_color-whitesmoke')
        } else if (colorElement.dataset.textColor === 'whitesmoke'){
            document.getElementById('book').classList.add('book_color-whitesmoke')
            document.getElementById('book').classList.remove('book_color-black')
            document.getElementById('book').classList.remove('book_color-gray')
        }
    })
}

const bookControlBackground = document.getElementsByClassName('book__control_background')[0]
for (const colorElement of bookControlBackground.getElementsByClassName('color')) {
    colorElement.addEventListener('click', (e) => {
        e.preventDefault();
        let colorElementActive = bookControlBackground.getElementsByClassName('color_active')[0]
        console.log(`colorElementActive: ${colorElementActive}`)
        colorElementActive.classList.remove('color_active')
        colorElement.classList.add('color_active')
        if (colorElement.dataset.bgColor === 'black') {
            document.getElementById('book').classList.add('book_bg-black')
            document.getElementById('book').classList.remove('book_bg-gray')
            document.getElementById('book').classList.remove('book_bg-white')
        } else if (colorElement.dataset.bgColor === 'gray') {
            document.getElementById('book').classList.add('book_bg-gray')
            document.getElementById('book').classList.remove('book_bg-black')
            document.getElementById('book').classList.remove('book_bg-white')
        } else if (colorElement.dataset.bgColor === 'white'){
            document.getElementById('book').classList.add('book_bg-white')
            document.getElementById('book').classList.remove('book_bg-black')
            document.getElementById('book').classList.remove('book_bg-gray')
        }
    })
}


