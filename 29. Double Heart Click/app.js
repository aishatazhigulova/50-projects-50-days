let countEL = document.querySelector('.count')
let photo = document.querySelector('.photo')
let post = document.querySelector('.post')
let heartEl = document.querySelector('.heart')

photo.addEventListener('dblclick', () => {
    let count = countEL.textContent
    count++
    countEL.textContent = count

    heartEl.classList.add('rotateHeart')
    
    setTimeout(() => {
        heartEl.classList.remove('rotateHeart')
    }, 400)
})