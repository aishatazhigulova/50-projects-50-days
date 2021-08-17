let canvasArea = document.querySelector('.canvas__area')
let btnDecrement = document.querySelector('.canvas__btn--decrement')
let displayThickness = document.querySelector('.canvas__btn--thickness')
let btnIncrement = document.querySelector('.canvas__btn--increment')
let colorPicker = document.querySelector('.canvas__color-picker')
let btnClear = document.querySelector('.canvas__btn--clear')

let ctx = canvasArea.getContext('2d')

let size = 10
let isPressed = false
let color = 'black'
let x
let y

function increment() {
    displayThickness.textContent = size
    size += 10

    if (size > 50) {
        size = 50
    }
}

function decrement() {
    displayThickness.textContent = size
    size -= 10
    if (size < 5) {
        size = 5
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvasArea.width, canvasArea.height);
}

function changeColor(e) {
    color = e.target.value
} 

btnIncrement.addEventListener('click', increment)
btnDecrement.addEventListener('click', decrement)
btnClear.addEventListener('click', clearCanvas)
colorPicker.addEventListener('change', changeColor)



canvasArea.addEventListener('mousedown', (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
})



canvasArea.addEventListener('mouseup', (e) => {
    isPressed = false
    x = undefined
    y = undefined
})


canvasArea.addEventListener('mousemove', (e) => {
    if (isPressed) {
        let x2 = e.offsetX
        let y2 = e.offsetY

        drawCircle(x2,y2)
        drawLine(x, y, x2,y2)

        x = x2
        y = y2
    }
})



function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x,y,size,0,Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1,y1,x2,y2) {
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}








