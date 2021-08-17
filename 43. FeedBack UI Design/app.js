let rateCard = document.querySelector('.rate-card')
let letterCard = document.querySelector('.letter-card')
let btn = document.querySelector('.rating__btn')


let ratings = document.querySelectorAll('.rating__item')

let message = 'Satisfied'


rateCard.addEventListener('click', (e) => {
    if (e.target.parentElement.classList.contains('rating__item')) {
            ratings.forEach(rating => {
                rating.classList.remove('active')

            e.target.parentElement.classList.add('active')

           message = e.target.parentElement.querySelector('.rating__name').textContent
        })
    }
})



btn.addEventListener('click', () => {
    letterCard.querySelector('.feedback').textContent = message

    rateCard.classList.add('hide')
    letterCard.classList.add('show')
})
