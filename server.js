const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 9876;
const windowSize = 10;
app.post('/calculate', (req, res) => {
    const numbers = req.body.numbers;
    const windowNumbers = numbers.slice(0, windowSize);
    const sum = windowNumbers.reduce((acc, num) => acc + num, 0);
    const average = sum / windowNumbers.length;
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
