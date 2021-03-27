const express = require('express')
const app = express()

const mongoose = require('mongoose')

// Tell the server where your routers are
const quizRouter = require('./routes/quiz')
const adminRouter = require('./routes/admin')

// This Must go ABOVE the app.use Routers Below!!!
// The POSTing will fail if this is not the case
app.use(express.urlencoded({ extended: false }))

// Tell express where the base levels of your Routers are!
app.use('/quiz', quizRouter)
app.use('/admin', adminRouter)

// Connect to the MongoDB 
mongoose.connect('mongodb://localhost/nqn', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => console.log(`Neebers Quiz Night - App Starting\nAccess on http://localhost:3000`));