let numberEls = document.querySelectorAll('.counter__num')
const duration = 2000
let numbers = [100,200,300]


function load() {
    numberEls.forEach((el, idx) => {
        let num = numbers[idx]
        let count = 0
    
        let interval = setInterval(function() {
            count += 1
            el.textContent = count
    
            if (count >= num) {
                clearInterval(interval)
            }
        }, duration / num)
    })
}

load()