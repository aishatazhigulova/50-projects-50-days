let btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => {
    let x = e.clientX
    let y = e.clientY
    console.log(x, y)

    let btnTop = e.target.offsetTop
    let btnLeft = e.target.offsetLeft
    // console.log(btnTop, btnLeft)

    let xInside = x - btnLeft
    let yInside = y - btnTop

    // console.log(xInside, yInside)

    let inside = document.createElement('span')
    inside.classList.add('inside')
    inside.style.top = yInside + 'px'
    inside.style.left = xInside + 'px'

    btn.appendChild(inside)

    setTimeout(() => inside.remove(), 500)
})