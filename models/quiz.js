const { text } = require('express')
const mongoose = require('mongoose')

const quizSchema =  new mongoose.Schema({
    quizName: {
        type: String,
        required: true
    },
    quizDate: {
        type: Date,
        required: true
    },
    quizRounds: {
        type: Number,
        required: true,
    },
    starttime: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String
    }
        
})

module.exports = mongoose.model('Quiz', quizSchema)