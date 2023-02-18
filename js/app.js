


//como consumir a API do movieDB?
const APIURL = "https://api.themoviedb.org/3/discover/movie?api_key=0e9a60a2250c61318751353c119055bb";
const form = document.getElementById("nosubmit");
const FILM = document.getElementById('pesquisa');
const IMGPATH = "https://image.tmdb.org/t/p/w200";
const API_KEY = '?api_key=0e9a60a2250c61318751353c119055bb'; /*API_KEY should only contain the api_key */
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/search/movie' + API_KEY+'&query='; /*Add the API_KEY here*/
const main = document.getElementById("content");
getMovies(APIURL);

async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);
    showMovies(respData.results);
}

function showMovies(movies) {
    // clear main
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview } = movie;
        const movieEl = document.createElement("div");
        movieEl.classList.add("card__filmes");
        movieEl.innerHTML = `
        <div class="filme__image">
        <img  src="${IMGPATH + poster_path}" alt="${title}">
    </div>
    <div class="dados__filme">
        <p class="titulo__filme">${title}</p>
        <div class="avaliacao">
            <span id="rating"><img class="star" src="./assets/svg/Star-icon.svg">${vote_average}</span>
            <span><img class="hearth" src="./assets/svg/Heart-icon.svg" onclick="favoritar(this)">Favoritar</span>
        </div>
    </div>
    <p class="sinapse">${overview}</p>
    `;
    main.appendChild(movieEl);
});
}



form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = FILM.value;
    if (searchTerm){
        getMovies(API_URL + searchTerm);

        FILM.value = "";
}
});



//Source: https://stackoverflow.com/questions/66912664


