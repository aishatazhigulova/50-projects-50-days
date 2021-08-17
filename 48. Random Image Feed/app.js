let boxes = document.querySelector('.boxes')
let imgs = document.querySelectorAll('img') 


let rows = 5
let index = 0


function createImgs() {

    let img = document.createElement('img')
    img.src = `https://source.unsplash.com/random/${getRandomSize()}`
    boxes.appendChild(img)
}

for (let i = 0; i < rows * 3; i++) {
    createImgs()
}

function getRandomNum() {
    return Math.floor(Math.random() * 10) + 300
}

function getRandomSize() {
    return `${getRandomNum()}x${getRandomNum()}`
}





