let btn = document.querySelector('.btn')
let hourLine = document.querySelector('.hour-line')
let minuteLine = document.querySelector('.minute-line')
let secondLine = document.querySelector('.second-line')

let time = document.querySelector('.time')
let date = document.querySelector('.date')

btn.addEventListener('click', () => {
    btn.parentElement.parentElement.classList.toggle('dark-mode')
})

time.textContent = dateTOAMORPM(new Date())

function dateTOAMORPM(currentDateTime) {
    var hrs = currentDateTime.getHours();
    var mnts = currentDateTime.getMinutes();
    var AMPM = hrs >= 12 ? 'PM' : 'AM';
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12;
    mnts = mnts < 10 ? '0' + mnts : mnts;
    var result = hrs + ':' + mnts + ' ' + AMPM;
    return result;
}

time.textContent = dateTOAMORPM(new Date())

date.textContent = new Date().toLocaleDateString()





function setRadius() {
    let date = new Date()
    let hour = ( 360 / 12 ) * (date.getHours() / 2)
    let minute = ( 360 / 60 ) *  date.getMinutes()
    let second = (360 / 60000) * (date.getSeconds()*1000 + date.getMilliseconds())

    hourLine.style.transform = `rotate(${hour}deg)`
    minuteLine.style.transform = `rotate(${minute}deg)`
    secondLine.style.transform = `rotate(${second}deg)`
}


setInterval(setRadius, 1)

