const mongoose = require('mongoose');

const FeedBackSchema = new mongoose.Schema({
    namePerson:{
        type: String,
        trim: true,
        minlength: 1
    },
    namePersonPhone:{
        type: String,
        trim: true,
        minlength: 1
    },
    namePersonEmail:{
        type: String,
        trim: true,
        minlength: 1
    },
    namePersonMessage:{
        type: String,
        trim: true,
        minlength: 1
    }
});

const FeedBack = mongoose.model('Response', FeedBackSchema)

module.exports = FeedBack;