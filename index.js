const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`Neebers Quiz Night`)
});

app.listen(process.env.PORT || 3000, () => console.log(`App Running on http://localhost:3000`));