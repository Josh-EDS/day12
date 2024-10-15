document.getElementById('fetch-data').addEventListener('click', async () => {
    const url = './GLB.Ts+dSST.csv';
    
    try {
        const response = await fetch(url);
        const data = await response.text();
        document.getElementById('data-output').textContent = data;
    } catch (error) {
        console.error('Error fetching the data:', error);
    }
});

// npm install -g http-server 
// http-server .
// http://127.0.0.1:8080/ex_02/
