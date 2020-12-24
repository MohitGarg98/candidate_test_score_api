const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    first_round: {
        type: Number,
        required: true
    },
    second_round: {
        type: Number,
        required: true
    },
    third_round: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Score', scoreSchema)