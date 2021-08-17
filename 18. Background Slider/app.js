let prevBtn = document.querySelector('.content__btn--prev')
let nextBtn = document.querySelector('.content__btn--next')
let backgroundImgEl = document.querySelectorAll('.content__img')
let body = document.body


let actives = 0

nextBtn.addEventListener('click', () => {
    actives++

  if (actives > backgroundImgEl.length - 1) {
    actives = 0
  }

  setBgToBody()
  setActiveSlide()
})

prevBtn.addEventListener('click', () => {
    actives--

  if (actives < 0) {
    actives = backgroundImgEl.length - 1
  }

  setBgToBody()
  setActiveSlide()
})

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = backgroundImgEl[actives].style.backgroundImage
}

function setActiveSlide() {
    backgroundImgEl.forEach((img) => img.classList.remove('active'))

    backgroundImgEl[actives].classList.add('active')
}
