let nav = document.querySelector('.navigation')
let buttons = document.querySelectorAll('.navigation__btn')
let link = document.querySelectorAll('.navigation__linke')

buttons.forEach(btn => {
    btn.addEventListener('click', event => {
       nav.classList.toggle('active')
    })
});