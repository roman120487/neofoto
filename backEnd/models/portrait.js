const mongoose = require('mongoose');

const PortraitSchema = new mongoose.Schema({
    nameProject:{
        type: String,
        trim: true,
        minlength: 1
    },
    categoryProject:{
        type: String,
        trim: true,
        minlength: 1
    },
    arrayImg:{
        type: Array,
        trim: true,
        minlength: 1
    },
    dirPhoto:{
        type: String,
        trim: true,
        minlength: 1
    }
});

const Portrait = mongoose.model('Portrait', PortraitSchema)

module.exports = Portrait;