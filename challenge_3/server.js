const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static('public'));
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.listen(PORT, () => console.log('Listerning on port' + PORT));