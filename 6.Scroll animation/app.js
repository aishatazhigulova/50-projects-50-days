let cards = document.querySelectorAll('.card')
let body = document.querySelector('body')


window.addEventListener('scroll', checkCards)

checkCards()

function checkCards() {
    let triggerBottom = window.innerHeight / 5 * 4

    cards.forEach(card => {
        let cardTop = card.getBoundingClientRect().top
        // let cardBottom = card.getBoundingClientRect().bottom

        if (cardTop < triggerBottom) {
            card.classList.add('show')
        } else {
            card.classList.remove('show')
        }
    })
}