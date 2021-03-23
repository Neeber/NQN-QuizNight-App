const express = require('express')
const router = express.Router()

router.get('/answers', (req, res) => {
    res.render('quizzes/answers')
})

module.exports = router