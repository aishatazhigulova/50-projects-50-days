let slider = document.querySelector('.slider')
let demo = document.querySelector('.demo')
let body = document.querySelector('body')



window.addEventListener('DOMContentLoaded', () => {
    slider.value = 50
    demo.innerHTML = slider.value
})

slider.addEventListener('input', function() {
    
    demo.innerHTML = this.value
})