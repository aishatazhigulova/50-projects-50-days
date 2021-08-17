let cardBottom = document.querySelector('.card__bottom')
let cardLinks = document.querySelectorAll('.card__link')
let cardTop = document.querySelector('.card__top')


cardLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        cardLinks.forEach(link => {
            link.classList.remove('active')
        });
        link.classList.add('active')
        cardTop.style.backgroundImage= backgrounds[index]
    })
})

let backgrounds = [
    "url('https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80')",
    "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
    "url('https://images.unsplash.com/photo-1587554801471-37976a256db0?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60')",
    "url('https://images.unsplash.com/photo-1518604100146-5d90d05f1b58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80')"
]
