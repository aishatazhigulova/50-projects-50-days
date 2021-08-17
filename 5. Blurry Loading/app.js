let backgroundEl = document.querySelector('.background')
let loadingPercentEl = document.querySelector('.loading-percent')



window.addEventListener('load', (e) => {
    let count = 100
    let blur = 100
    let interval = setInterval(function () {
        count -= 1
        blur -= 1
        if(count <= 0) {
            clearInterval(interval)
        }
        loadingPercentEl.textContent = `${count}%`
        backgroundEl.style.filter = `blur(${blur}px)`
        loadingPercentEl.style.opacity = scale(count, 100, 0, 1, 0)

    }, 30)
})


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}