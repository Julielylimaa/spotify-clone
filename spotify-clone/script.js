const searchInput = document.getElementById('search-input');
const resultsArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm){
    //busca dentro da api apenas os resultados igual ao termo
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json()) //converte para um json
        .then((result) => displayResults(result))
}

function displayResults(result){
    resultPlaylist.classList.add('hidden')
    const artistName = document.getElementById('artist-name')
    const artistImage = document.getElementById('artist-img')

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultsArtists.classList.remove('hidden')

}

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    console.log(searchTerm)
    if(searchTerm === ''){
        resultPlaylist.classList.add('hidden');
        resultsArtists.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);
})

