const express = require('express')
const app = express()

const mongoose = require('mongoose')


//Setup the Routers
const quizRouter = require('./routes/quizzes')

mongoose.connect('mongodb://localhost/nqn', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.render('quizzes/answers')
})


//Tell Express where the /Quizzes Router is and use it
app.use('/quizzes', quizRouter)

app.listen(3000, () => console.log(`Neebers Quiz Night - App Starting\nAccess on http://localhost:3000`));