let prevBtn = document.querySelector('.joke__previous')
let nextBtn = document.querySelector('.joke__next')

let jokeTitle = document.querySelector('.joke__title')

nextBtn.addEventListener('click', getJoke);
let arr = []


async function getJoke() {
    // prevBtn.style.cursor = 'pointer'
    // prevBtn.style.backgroundColor = '#bd29bd'
    let jokeData = await fetch('https://icanhazdadjoke.com/', {
    headers: { 'Accept': 'application/json'}})
    let jokeObj = await jokeData.json()
    
    let newJoke = jokeObj.joke
    jokeTitle.textContent = newJoke
    arr.push(newJoke)

    if (arr.length > 1) {
        prevBtn.disabled = false
    } else {
        prevBtn.disabled = true
    }
}


getJoke()

prevBtn.addEventListener('click', () => {

    jokeTitle.innerHTML = arr.pop()
})

