let buttons = document.querySelectorAll('.btn')
let navEls = document.querySelectorAll('.nav')

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        navEls.forEach(nav => {
            nav.classList.toggle('active')
        })
    })
});