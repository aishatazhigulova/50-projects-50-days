let buttons = document.querySelectorAll('.btn')
let btnS = document.querySelector('speed--slow')
let btnM = document.querySelector('speed--medium')
let btnF = document.querySelector('speed--fast')
let tickerEl = document.querySelector('.ticker')

window.addEventListener('load', addText)

let text = 'Future Frontend Developer'   
let idx = 1
let speeds = [1000, 300, 100]
let speed = speeds[0]

function addText() {
    tickerEl.innerText = text.slice(0, idx)
    idx++
    if(idx > text.length) {
        idx = 1
    }
    setTimeout(addText, speed)
}


buttons.forEach((button, i) => {
    button.addEventListener('click', (e) => {
        buttons.forEach(button => {
            button.classList.remove('active')
        })
        e.target.classList.add('active')
        speed = speeds[i]
    })
})
