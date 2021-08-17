var audio = document.querySelector('#audio')
var btn = document.querySelector('#btn')
var playIcon = document.querySelector('#playIcon')
var pauseIcon = document.querySelector('#pauseIcon')


btn.addEventListener('click', play)

function play() {
    if (audio.paused) {
        audio.play()
        playIcon.style.display = 'none'
        pauseIcon.style.display = 'block'
    } else {
        audio.pause()
        audio.currentTime = 0
        playIcon.style.display = 'block'
        pauseIcon.style.display = 'none'
    }
}
