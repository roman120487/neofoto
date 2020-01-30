const mongoose = require('mongoose');

const ResponseSchema = new mongoose.Schema({
    response:{
        type: String,
        trim: true,
        minlength: 1
    },
    author:{
        type: String,
        trim: true,
        minlength: 1
    },
    idImg:{
        type: String,
        trim: true,
        minlength: 1
    },
    idImgUrl:{
        type: String,
        trim: true,
        minlength: 1
    }
});

const Response = mongoose.model('Response', ResponseSchema)

module.exports = Response;