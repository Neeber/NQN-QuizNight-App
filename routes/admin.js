const express = require('express')
const adminRouter = express.Router()
const Quiz = require('../models/quiz')
const methodOverride = require('method-override')

adminRouter.use(methodOverride('_method'))

adminRouter.get('/', async (req, res) => {
    const quiz = new Quiz
    const quizzes = await Quiz.find().sort({ createdAt: 'desc' })
    res.render('admin/panel', { quizzes: quizzes, quiz: quiz })
})

adminRouter.get('/:id', async (req, res) =>{
    const quiz = await Quiz.findById(req.params.id)
    res.render('admin/edit', { quiz: quiz })
})

adminRouter.delete('/:id', async (req, res) => {
    await Quiz.findByIdAndDelete(req.params.id)
    res.redirect('/admin')
})

adminRouter.put('/:id', async (req, res, next) => {
    req.quiz = await Quiz.findById(req.params.id)
    console.log(req.body.quizStatus)
    next()
}, saveArticleAndRedirect('edit'))

adminRouter.post('/', async (req, res, next) => {
    req.quiz = new Quiz()
    next()
}, saveArticleAndRedirect('new'))

function saveArticleAndRedirect(path) {
    return async (req, res) => {
        
        let quiz = req.quiz

        quiz.quizName = req.body.quizName
        quiz.quizDate = req.body.quizDate
        quiz.starttime = req.body.starttime
        quiz.quizRounds = req.body.quizRounds
        
        quiz.quizStatus = req.body.quizStatus

        
        try {
            quiz = await quiz.save()
            res.redirect(`/admin`)
        } catch (e) {
            console.log(e)
            res.render(`/admin/edit`, { quiz: quiz })
        }
    }
}

module.exports = adminRouter