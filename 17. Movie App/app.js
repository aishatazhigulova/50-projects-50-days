let API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=82e8606c2753328dfd079ecafc04ee27&page=1'
let IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
let SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=82e8606c2753328dfd079ecafc04ee27&query="'


let content = document.querySelector('.content')
let form = document.querySelector('.form')
let formSearch = document.querySelector('.form__search')


//Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    let res = await fetch(url)
    let data= await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    content.innerHTML = ''
    

    movies.forEach(movie => {
        let {title, poster_path, vote_average, overview} = movie

        let movieEL = document.createElement('div')
        movieEL.classList.add('movie')
        movieEL.innerHTML = `
        <div class="movie">
            <img class="movie__img" src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie__info">
            <h3 class="movie__title">${title}</h3>
            <span class="movie__rating ${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="movie__overview">
            <h3>Overview</h3>
            <p class="movie__description">
                ${overview}
            </p>
        </div>
        </div>`
        
        content.appendChild(movieEL)
        
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return `movie__rating--high`
    } else if (vote >= 5) {
        return `movie__rating--medium`
    } else {
        return `movie__rating--low`
    }
} 

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let searchTerm = formSearch.value

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)
        formSearch.value = ''
    } else {
        window.location.reload()
    }
})