let background = document.querySelector('.background')
let passwordInput = document.querySelector('.form__password')

passwordInput.addEventListener('input', (e) => {
    let length = e.target.value.length
    let blur = 20 - (length * 2)
    background.style.filter = `blur(${blur}px)`
})