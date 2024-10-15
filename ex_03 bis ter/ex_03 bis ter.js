let currentPage = 1;
const planetsPerPage = 10;
let planets = [];

async function fetchPlanets(page) {
    const response = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
    const data = await response.json();
    planets = data.results;
    updatePlanetList();
    updateButtons(data.count);
}

function updatePlanetList() {
    const planetList = document.getElementById('planet-list');
    planetList.innerHTML = '';

    const searchValue = document.getElementById('search-input').value.toLowerCase();
    const filteredPlanets = planets.filter(planet => planet.name.toLowerCase().includes(searchValue));

    filteredPlanets.forEach(planet => {
        const planetItem = document.createElement('li');
        planetItem.className = 'info';
        planetItem.textContent = planet.name;
        planetItem.onclick = () => showPlanetDetails(planet);
        planetList.appendChild(planetItem);
    });
}

function updateButtons(totalCount) {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage * planetsPerPage >= totalCount;
}

function showPlanetDetails(planet) {
    const planetReport = document.getElementById('planet-report');
    planetReport.style.display = 'block';
    planetReport.innerHTML = `
        <h2>${planet.name}</h2>
        <p>Climate: ${planet.climate}</p>
        <p>Terrain: ${planet.terrain}</p>
        <p>Population: ${planet.population}</p>
        <h3>Residents:</h3>
        <ul id="resident-list" class="box"></ul>
        <h3>Films:</h3>
        <ul id="film-list" class="box"></ul>
    `;

    fetchResidents(planet.residents);
    fetchFilms(planet.films);
}

async function fetchResidents(residentUrls) {
    const residentList = document.getElementById('resident-list');
    residentList.innerHTML = '';
    
    for (const url of residentUrls) {
        const response = await fetch(url);
        const resident = await response.json();
        const residentItem = document.createElement('li');
        residentItem.textContent = resident.name;
        residentList.appendChild(residentItem);
    }
}

async function fetchFilms(filmUrls) {
    const filmList = document.getElementById('film-list');
    filmList.innerHTML = '';
    
    for (const url of filmUrls) {
        const response = await fetch(url);
        const film = await response.json();
        const filmItem = document.createElement('li');
        filmItem.textContent = film.title;
        filmList.appendChild(filmItem);
    }
}

document.getElementById('next-button').onclick = () => {
    currentPage++;
    fetchPlanets(currentPage);
};

document.getElementById('prev-button').onclick = () => {
    if (currentPage > 1) {
        currentPage--;
        fetchPlanets(currentPage);
    }
};

document.getElementById('search-input').oninput = () => {
    updatePlanetList();
};


fetchPlanets(currentPage);
