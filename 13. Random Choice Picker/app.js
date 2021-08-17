let text = document.querySelector('.text')
let tagEl = document.querySelector('.tags')

text.focus()
text.value = ''

text.addEventListener('input', () => {
    createTags(text.value)

})

function createTags(input) {
    let tags = input.split(' ')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim())

    tagEl.innerHTML = ''
    
    tags.forEach(tag => {
      let btn = document.createElement('button')
        btn.classList.toggle('btn')
        btn.innerHTML = tag
        tagEl.append(btn)
    });


}
