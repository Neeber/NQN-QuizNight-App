const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
    //res.send(`Neebers Quiz Night`)

    fs.readFile('./html/answer.html', 'utf8', (err, html) => {

        if (!err) return res.send(html);
        return res.status(500).send('Something went wrong!');

    });

});

app.listen(process.env.PORT || 3000, () => console.log(`App Running on http://localhost:3000`));