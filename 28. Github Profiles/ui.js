class UI {
    constructor() {
        this.mainEl = document.querySelector('.main')
    }


    showProfile(user) {
        this.mainEl.innerHTML = `
        <div class="card">
            <img src="${user.avatar_url}" alt="">
            <div class="card-info">
                <h2>${user.login}</h2>
                <p>${user.bio}</p>
                <ul>
                    <li>${user.followers} Folowers</li>
                    <li>${user.following} Following</li>
                    <li>${user.public_repos} Repos</li>
                </ul>
                <div class="repo"></div>
            </div>
        </div>
        `

    }

    showRepos(repos) {
        let output = ''
        repos.forEach(repo => {
            output += `
            <a href="${repo.html_url}">${repo.name}</a>
            `
        })
        document.querySelector('.repo').innerHTML = output

    }

    clearProfile() {
        this.mainEl.innerHTML = ''
    }

    showAlert() {
        this.mainEl.innerHTML = `
            <div class="card">
                <h2>No profile with this username</h2>
            </div>
        `
    }

    clearAlert() {
        this.mainEl.innerHTML = ''
    }


}