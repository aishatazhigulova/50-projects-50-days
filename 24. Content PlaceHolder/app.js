let cardTop = document.querySelector('.card__top')
let cardTitle = document.querySelector('.card__title')
let cardDescription = document.querySelector('.card__description')
let cardUser = document.querySelector('.card__user')
let cardUserName = document.querySelector('.card__username')
let cardDate = document.querySelector('.card__date')

setTimeout(fillTheCard, 2000)

function fillTheCard(){
    cardTop.style.backgroundImage = "url('https://images.unsplash.com/photo-1619123566822-f1f654b9edbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80')"
    cardTitle.textContent = 'Lorem ipsum dolor sit amet'
    cardDescription.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ea porro voluptate culpa, incidunt nemo.'
    cardUser.style.backgroundImage = "url('https://images.unsplash.com/photo-1619123557820-6f97379d2e22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1651&q=80')"
    cardUserName.textContent = 'Joanna Doe'
    cardDate.textContent = 'Jun 11, 2021'

    removeGradient()
}

let arr = [cardTop, cardTitle, cardDescription, cardUser, cardDate]
function removeGradient() {
    arr.forEach(item => {
        item.classList.remove('gradient')
    })
}
