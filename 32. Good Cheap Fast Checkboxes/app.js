let good = document.querySelector('.good')
let cheap = document.querySelector('.cheap')
let fast = document.querySelector('.fast')
let checkboxes = document.querySelectorAll('.checkbox')


checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        if (good.checked && cheap.checked && fast.checked) {
            if (good === e.target) {
                fast.checked = false
            }
    
            if (cheap === e.target) {
                good.checked = false
            }
    
            if (fast === e.target) {
                cheap.checked = false
            }
        }
    })
})

window.addEventListener('load', () => {
    checkboxes.forEach(checkbox => {
        checkbox.checked = false
    })
})