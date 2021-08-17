let closeBtnEl = document.querySelector('#close')
let openBtnEl = document.querySelector('#open')

let containerEl = document.querySelector('.container')

openBtnEl.addEventListener('click', () => {
    containerEl.classList.add('show-nav')
})

closeBtnEl.addEventListener('click', () => {
    containerEl.classList.remove('show-nav')
})
