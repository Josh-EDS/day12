const planetImages = {
    "Mercury": "https://imgs.search.brave.com/2LTYadwUpyR4eu6B93dC5C64mhCqUnxguLlSri0UDm8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzE1LzEwLzM5/LzM2MF9GXzMxNTEw/Mzk2M19YWHpUdkJI/ZHV6RTFjY0hiZWx6/ZW9MZUdjeUtxSXB4/Zy5qcGc",
    "Venus": "https://imgs.search.brave.com/lkf8P27cC5LBuX66qARXg-OPETO8YRTv3XaoMe4Y_Bo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODU3/NTgzNzgvZnIvcGhv/dG8vcGxhbmV0LXZl/bnVzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1GWnZtckdK/UUR6UGRfckRTN1dq/V3ktLXZnUGFHUTNy/QTVXSEhZR2QyUVhJ/PQ",
    "Earth": "https://imgs.search.brave.com/UwJrTKxa_SfDBe1BiI-POGz0-HDe1njamghDFNxj1sw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgz/NzgxNTk4L3Bob3Rv/L2VhcnRoLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz03aWJB/a2xPQTc0QWNibzVQ/eWJmSVk3eXVzQm0x/a0hYV2swOG5zODdU/UGh3PQ",
    "Mars": "https://imgs.search.brave.com/0_MdtzOsp4gzbDjPvCO19TcS8obpqWyEA5tzKSzrppI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTg1/ODM3MDEwL2ZyL3Bo/b3RvL21hcnMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWdO/U2F0OWRBbE1meE5I/X1N5YksxVC16MTdV/dER6RFU2R2ZtbHpl/ZEJUZFU9",
    "Jupiter": "https://imgs.search.brave.com/LuRPmjdMEZ5fTXrIofTtipmiYh-_GMiRazooKG2zB7Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZnV0dXJhLXNjaWVu/Y2VzLmNvbS9jZG4t/Y2dpL2ltYWdlL3dp/ZHRoPTEwMjQscXVh/bGl0eT02MCxmb3Jt/YXQ9YXV0by9zb3Vy/Y2VzL2ltYWdlcy9n/bG9zc2FpcmUvam92/aWFuLTE2MDMwN2Ff/MDIuanBn",
    "Saturn": "https://imgs.search.brave.com/K0kpAU3VhPCcypXyCJfvV3nRlhxqnajSz7YCTYBN1mc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDgw/MDE5MjI0L3Bob3Rv/L3NhdHVybi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9djg3/WHB4a3lLTlhHSlZj/UV9tM3dXWWloQVVH/TksxYnZhZEVXa2hj/Y0dkaz0",
    "Uranus": "https://imgs.search.brave.com/gsW_2dnwWvAasfUA5uS24i9VCj2nD5U6B49fs_ezM2w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDY2/NDMyOTM2L3Bob3Rv/L3VyYW51cy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9YTF3/ZDFvSUNhTVo4aVIw/OTBPV2VGQlh3VXRK/Vk1zRU1kZU1oSVRO/ZTZvST0",
    "Neptune": "https://imgs.search.brave.com/EZUXSSG1MLT6JGRpcvz8pChWbZf1KCTti96l8Yis1yU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGFyb3Vzc2UuZnIv/ZW5jeWNsb3BlZGll/L2RhdGEvaW1hZ2Vz/LzEwMDk3NjctTmVw/dHVuZS5qcGc",
    "Pluto": "https://imgs.search.brave.com/vvPhRMdDkcZS6gkdTt-KoL8GwwlwEJk6Y4WaSxVFe0Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzc2LzY4LzUw/LzM2MF9GXzI3NjY4/NTAyN19HUFpzaGdR/c1lPNllheHBiclJt/Zm0xQWNWdHJhVmVr/Yy5qcGc"
};

async function fetchPlanetImage(planetName) {
    return planetImages[planetName] || 'https://via.placeholder.com/150';
}

function getClimateImage(climate) {
    return climate.toLowerCase() === "cold" 
        ? "https://cdn.iconscout.com/icon/free/png-256/free-cold-thermometer-icon-download-in-svg-png-gif-file-formats--temperature-winter-warm-weather-pack-nature-icons-3922956.png?f=webp&w=256"
        : "https://cdn3d.iconscout.com/3d/premium/thumb/hot-temperature-3d-icon-download-in-png-blend-fbx-gltf-file-formats--thermometer-weather-pack-nature-icons-8263482.png";
}

function getPopulationImage(population) {
    return population < 100 
        ? "https://t3.ftcdn.net/jpg/05/28/72/26/360_F_528722681_NJ1fxLRWHk3479OcprSwiEcl2Kb1duNf.jpg" 
        : "https://a3.cdn.japantravel.com/photo/3016-194379/1440x960!/tokyo-shibuya-crossing-194379.jpg";
}

function getTerrainImage(terrain) {
    const terrainImageMap = {
        "rocky": "https://imgs.search.brave.com/foLbsSVSYjMd3WnOVw8ipjawpaC-jpbD1RfQRdfWbfA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cGhvdG9zLXByZW1p/dW0vdGVycmFpbi1y/b2NoZXV4LXF1ZWxx/dWVzLWFyYnJlcy1t/b250YWduZXMtYXJy/aWVyZS1wbGFuXzEw/MzQ5NzMtODMyODMu/anBnP3NpemU9NjI2/JmV4dD1qcGc",
        "desert": "https://imgs.search.brave.com/1UfHJog9Ucnda3wRHF04rebbQ5Lf6NogUVGbZUpGu9w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2Vt/ZXJhbGQtaXNsZXMv/aW1hZ2VzLzgvODcv/RGVzZXJ0LmpwZy9y/ZXZpc2lvbi9sYXRl/c3Qvc2NhbGUtdG8t/d2lkdGgtZG93bi83/ODg_Y2I9MjAxODAy/MDkwNjQwMDQ",
        "ocean": "https://imgs.search.brave.com/KvKEPdcdOtVWeEnBukRKG2zHXITL0Cavycj_8a_7M8s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY3/NzA4MzgwL2ZyL3Bo/b3RvL29jZWFuLXNr/eWxpbmUtMS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9c0pP/SnhMUjQzWG1KYkc2/YTZCRFlLcUpsanJJ/dkQzQjlaUWNqVW5Z/aU5iaz0",
        "icy": "https://imgs.search.brave.com/6RSL2l87yjKGVcRiOB8khOu295_yc6A_Jm1JcXabjcc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by8z/ZC1yZW5kZXItbW91/bnRhaW4tcmFuZ2Ut/aWNlXzEwNDgtNDE4/MC5qcGc_c2l6ZT02/MjYmZXh0PWpwZw",
        "gas": "https://imgs.search.brave.com/ZvpYxmxvPQKXwiY_PSlw4fgPMRQdRzbKrvjPDldCtQk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0tD/cDN0NTNXd0g0aFJG/b1RHdjhybjctMzIw/LTgwLmpwZw"
    };
    return terrainImageMap[terrain.toLowerCase()] || 'https://via.placeholder.com/150';
}

async function display_planet_info(planet) {
    const planetList = document.getElementById('planet-list');
    const planetItem = document.createElement('li');
    planetItem.className = 'info'; 

    const planetImage = await fetchPlanetImage(planet.name);
    const populationImage = getPopulationImage(planet.population);

    planetItem.innerHTML = `
        <div class="box"><span><img src="${planetImage}" alt="${planet.name} image"><strong>Planet: ${planet.name}</strong></span></div>
        <div class="box"><span><img src="https://www.mathsisfun.com/geometry/images/circle-lines.svg" alt="diameter"> Diameter: ${planet.diameter} km</span></div>
        <div class="box"><span><img src="${getClimateImage(planet.climate)}" alt="climate"> Climate: ${planet.climate}</span></div>
        <div class="box"><span><img src="${getTerrainImage(planet.terrain)}" alt="terrain"> Terrain: ${planet.terrain}</span></div>
        <div class="box"><span><img src="${populationImage}" alt="population"> Population: ${planet.population}</span></div>
    `;
    planetList.appendChild(planetItem);
}

// Exemple of a any planet -- Vous etes fortement invité a changer.
const mars = {
    name: "Mars", // Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto
    diameter: "6779",
    climate: "cold",
    terrain: "rocky", // [rocky,desert,ocean,icy,gas]
    population: "0"
};

display_planet_info(mars);