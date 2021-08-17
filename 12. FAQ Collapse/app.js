let cardBox = document.querySelector('.card-box')
let btn = document.querySelectorAll('.card__btn')

btn.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentElement.classList.toggle('active')
    })
})

