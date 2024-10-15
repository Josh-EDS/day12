const fetchData = async () => {
    const apis = [
        'https://dog.ceo/api/breeds/image/random',
        'https://api.thecatapi.com/v1/images/search',
        'https://api.quotable.io/random',
        'https://v2.jokeapi.dev/joke/Any',
        'https://www.themealdb.com/api/json/v1/1/random.php'
    ];

    const randomApi = apis[Math.floor(Math.random() * apis.length)];
    let data;

    try {
        const response = await fetch(randomApi);
        data = await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return;
    }

    displayData(randomApi, data);
};

const displayData = (api, data) => {
    const resultsDiv = document.getElementById('results');
    const card = document.createElement('div');
    card.className = 'card';

    if (api.includes('dog.ceo')) {
        const img = document.createElement('img');
        img.src = data.message;
        card.appendChild(img);
    } else if (api.includes('thecatapi')) {
        const img = document.createElement('img');
        img.src = data[0].url;
        card.appendChild(img);
    } else if (api.includes('quotable')) {
        const quote = document.createElement('p');
        quote.innerText = `"${data.content}" - ${data.author}`;
        card.appendChild(quote);
    } else if (api.includes('jokeapi')) {
        const joke = document.createElement('p');
        joke.innerText = data.setup ? `${data.setup} - ${data.delivery}` : data.joke;
        card.appendChild(joke);
    } else if (api.includes('themealdb')) {
        const meal = document.createElement('p');
        meal.innerText = `Meal: ${data.meals[0].strMeal}`;
        const img = document.createElement('img');
        img.src = data.meals[0].strMealThumb;
        card.appendChild(meal);
        card.appendChild(img);
    }

    resultsDiv.appendChild(card);
};

document.getElementById('fetch-data').addEventListener('click', fetchData);
