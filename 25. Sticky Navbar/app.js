let header = document.querySelector('.header')

window.addEventListener('scroll', (e) => {
    if (window.scrollY > header.offsetHeight + 150) {
        header.classList.add('light-theme')
    } else {
        header.classList.remove('light-theme')
    }

})
