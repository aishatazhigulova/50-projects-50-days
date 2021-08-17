let nav = document.querySelector('#nav')
let btn = document.querySelector('#toggle')

btn.addEventListener('click', event => {
    nav.classList.toggle('active')
})