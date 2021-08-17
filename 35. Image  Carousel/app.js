let imgEls = document.querySelector('#imgs')
let img = document.querySelectorAll('#imgs img')

let leftBtnEl = document.querySelector('#left')
let rightBtnEl = document.querySelector('#right')

let index = 0

let interval = setInterval(run, 2000)

function run() {
    index++
    changeImg()
}



function changeImg() {
    if (index > img.length - 1) {
        index = 0
    } else if (index < 0) {
        index = img.length - 1
    }
    
    imgEls.style.transform = `translateX(${-index * 500}px)`
}


function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}


rightBtnEl.addEventListener('click', () => {
    index++
    changeImg()
    resetInterval()
})


leftBtnEl.addEventListener('click', () => {
    index--
    changeImg()
    resetInterval()
})

