let input = document.querySelector('.input')
let form = document.querySelector('#form')
let todos = document.querySelector('.todos')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTask(e)
});


function addTask(e) {

    if(input.value === '') {
        alert('Add a task');
    }

    let li = document.createElement('li')
    li.innerText = input.value
    todos.appendChild(li)

    input.value = '';


    li.addEventListener('click', (e) => {
        e.target.classList.toggle('completed')
    })

}

// let lists = document.querySelectorAll('li')
// lists.forEach(li => {
//     li.addEventListener('click', (e) => {
//         console.log(e.target.innerText)
//     })
// })
