const express = require('express')
const quizRouter = express.Router()
const methodOverride = require('method-override')

quizRouter.use(methodOverride('_method'))

quizRouter.get('/', (req, res) => {
    res.render('quiz/answers', { test: 'Hi' })
})

module.exports = quizRouter