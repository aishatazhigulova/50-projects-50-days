let formEl = document.querySelector('.form')
let inputEl = document.querySelector('input')

//Init Github class
let github = new Github
let ui = new UI //to instantiate a Github class


formEl.addEventListener('submit', (e) => {
    let text = inputEl.value

    if (text !== '') {
        //Get user
        github.getUser(text)
            .then(data => {
                if (data.profileData.message === 'Not Found') {
                    ui.showAlert()
                } else {
                    ui.showProfile(data.profileData)
                    ui.showRepos(data.reposData)
                }
            })
        //Clear input
        inputEl.value = ''
    } 
    e.preventDefault()
})