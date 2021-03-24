const express = require('express')
const adminRouter = express.Router()

adminRouter.get('/', (req, res) => {
    res.render('admin/panel')
})

module.exports = adminRouter