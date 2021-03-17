const express = require('express');
const fs = require('fs');

const app = express();
const port = '3000';

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

app.get('/', (req, res) => {
    //res.send(`Neebers Quiz Night`)

    fs.readFile('./views/answer.html', 'utf8', (err, html) => {

        if (!err) return res.send(html);
        return res.status(500).send('Something went wrong!');

    });

});

app.listen(port, () => console.log(`App Running on http://localhost:3000`));