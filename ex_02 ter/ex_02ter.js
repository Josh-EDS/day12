document.getElementById('fetch-data').addEventListener('click', async () => {
    const url = './GLB.Ts+dSST.csv';
    try {
        const response = await fetch(url), data = await response.text(), lines = data.split('\n'), years = [], januaryTemps = [];
        for (let i = 1; i < lines.length; i++) { const cols = lines[i].split(','); if (cols.length > 2) { years.push(cols[0]); januaryTemps.push(parseFloat(cols[1])); }}
        const ctx = document.getElementById('temperatureChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: { labels: years, datasets: [{ label: 'January Temperature (°C)', data: januaryTemps, borderColor: 'rgba(75, 192, 192, 1)', backgroundColor: 'rgba(75, 192, 192, 0.2)', fill: true, tension: 0.1 }] },
            options: { scales: { y: { beginAtZero: false } }, responsive: true, plugins: { title: { display: true, text: 'January Temperature Evolution (1880 - Present)' } } }
        });
    } catch (error) { console.error('Error fetching the data:', error); }
});


// npm install -g http-server 
// http-server .
// http://127.0.0.1:8080/ex_02 ter/
