const express = require('express')
const app = express()

const mongoose = require('mongoose')

//Setup the Routers
const quizRouter = require('./routes/quiz')
const adminRouter = require('./routes/admin')

mongoose.connect('mongodb://localhost/nqn', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

//Tell Express where the /Quizzes Router is and use it
app.use('/quiz', quizRouter)
app.use('/admin', adminRouter)

app.get('/', (req, res) => {
    res.render('index')
})


app.listen(3000, () => console.log(`Neebers Quiz Night - App Starting\nAccess on http://localhost:3000`));