const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    firstName:{
        type: String,
        trim: true,
        minlength: 1
    },
    lastName:{
        type: String,
        trim: true,
        minlength: 1
    },
    linkNetwork:{
        type: String,
        trim: true,
        minlength: 1
    },
    imgID:{
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

const Team = mongoose.model('Team', TeamSchema)

module.exports = Team;