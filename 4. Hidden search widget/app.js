let searchBox = document.querySelector('.search-box')
let input = document.querySelector('.input')
let btn = document.querySelector('.btn')

btn.addEventListener('click', event => {
    searchBox.classList.toggle('active')
    input.classList.toggle('openInput')
    btn.classList.toggle('openBtn')
    input.focus()
})
