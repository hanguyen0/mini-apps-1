const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('client'));

app.get('/data', (req, res) => {
    console.log(res)
    res.send("hello there");
});

app.post('/data', (req, res) => {
    console.log(req.body)
    res.send("got a Post request");
})
app.listen(port, () => console.log(`App listening on port ${port}`));
