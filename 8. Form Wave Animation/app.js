let formLabel = document.querySelectorAll('.form-label')
let formInput = document.querySelectorAll('.form-input')



let emailInput = document.querySelector('#email-input')
let emailLabel = document.querySelector('#email-label')


let passwordInput = document.querySelector('#password-input')
let passwordLabel = document.querySelector('#password-label')


formLabel.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, index) => `<span style="transition-delay:${index * 50}s">${letter}</span>`)
        .join('')
});