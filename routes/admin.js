const express = require('express')
const adminRouter = express.Router()
const Quiz = require('../models/quiz')
const methodOverride = require('method-override')

adminRouter.use(methodOverride('_method'))

adminRouter.get('/', async (req, res) => {
    const quizzes = await Quiz.find().sort({ createdAt: 'desc' })
    res.render('admin/panel', { quizzes: quizzes })
})

adminRouter.put('/:id', (req, res) => {

})

adminRouter.delete('/:id', async (req, res) => {
    await Quiz.findByIdAndDelete(req.params.id)
    res.redirect('/admin')
})

adminRouter.post('/', async (req, res) => {
    
    let quiz = new Quiz({
        quizName: req.body.quizName,
        quizDate: req.body.quizDate,
        starttime: req.body.starttime,
        quizRound: req.body.quizRounds
    })

    try {
        quiz = await quiz.save()
        console.log(`Created a new quiz`)
        res.redirect(`/admin`)
    } catch (e) {
        console.log(e)
    }
})


module.exports = adminRouter