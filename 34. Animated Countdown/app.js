let counter = document.querySelector('.counter')
let final = document.querySelector('.final')
let numbers = document.querySelectorAll('.numbers span')
let btn = document.querySelector('.btn')


runAnimation()

function runAnimation() {
    numbers.forEach((num, index) => {
        let nextToLast = numbers.length - 1

        num.addEventListener('animationend', (e) => {
            if (e.animationName === 'goIn' && index !== nextToLast) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                final.classList.add('show')
            }
        })
    })
}


function reset() {
    counter.classList.remove('hide')
    final.classList.remove('show')

    numbers.forEach(num => {
        num.classList.value = ''
    })

    numbers[0].classList.add('in')
}

btn.addEventListener('click', reset)