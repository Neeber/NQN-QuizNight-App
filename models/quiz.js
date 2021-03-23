const mongoose = require('mongoose')

const quizSchema =  new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})