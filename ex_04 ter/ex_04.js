const fetchData = async () => {
    const api = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const mealData = await Promise.all(Array.from({ length: 2 }, async () => {
        const response = await fetch(api);
        return (await response.json()).meals[0];
    }));

    displayData(mealData);
};

const displayData = (mealData) => {
    const container = document.getElementById('api-results');
    container.innerHTML = '';

    mealData.forEach(meal => {
        const card = document.createElement('div');
        card.classList.add('box');

        card.innerHTML = `
            <p>Meal: ${meal.strMeal}</p>
            <img src="${meal.strMealThumb}" />
        `;
        card.querySelector('img').onclick = () => handleImageClick(card);
        container.appendChild(card);
    });

    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next';
    nextButton.onclick = () => window.location.reload();
    Object.assign(nextButton.style, {
        display: 'block', margin: '20px auto', padding: '10px 20px', fontSize: '1.2em',
        color: '#ffffff', backgroundColor: '#00ffcc', border: 'none', borderRadius: '5px',
        cursor: 'pointer', transition: 'background-color 0.3s, transform 0.2s'
    });
    nextButton.onmouseover = () => (nextButton.style.backgroundColor = '#009f99', nextButton.style.transform = 'scale(1.05)');
    nextButton.onmouseout = () => (nextButton.style.backgroundColor = '#00ffcc', nextButton.style.transform = 'scale(1)');

    container.appendChild(nextButton);
};

const handleImageClick = (card) => {
    const isCorrect = Math.random() < 0.7;
    const percentage = isCorrect 
        ? Math.floor(Math.random() * (60 - 50 + 1)) + 50 
        : Math.floor(Math.random() * (50 - 40 + 1)) + 40;

    card.style.backgroundColor = isCorrect ? 'rgba(0, 255, 0, 0.7)' : 'rgba(255, 0, 0, 0.7)';
    displayVotePercentage(percentage);
};

const displayVotePercentage = (percentage) => {
    const percentageDisplay = document.createElement('div');
    percentageDisplay.className = 'percentage-display';
    percentageDisplay.innerText = `Percentage: ${percentage}%`;
    percentageDisplay.style.opacity = '0';
    document.body.appendChild(percentageDisplay);

    setTimeout(() => { percentageDisplay.style.opacity = '1'; }, 10);
    setTimeout(() => {
        percentageDisplay.style.opacity = '0';
        setTimeout(() => document.body.removeChild(percentageDisplay), 1000);
    }, 3000);
};

window.onload = fetchData;
