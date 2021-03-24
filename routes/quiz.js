const express = require('express')
const quizRouter = express.Router()

quizRouter.get('/', (req, res) => {
    res.render('quiz/answers')
})

module.exports = quizRouter