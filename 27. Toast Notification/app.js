let showBtn = document.querySelector('.show-btn')
let messages = document.querySelector('.messages')


let texts = [
    'Message One',
    'Message Two',
    'Message Three',
]

showBtn.addEventListener('click', () => {
    let message = document.createElement('btn')
    message.classList.add('btn', 'message')
    
    message.innerText = texts[Math.floor(Math.random() * texts.length)]
    
    messages.appendChild(message)
    
    setTimeout(() => {
        message.remove()
    }, 3000)
})