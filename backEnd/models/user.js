const mongoose = require('mongoose');
const config = require('../config/passport');

const UserSchema = new mongoose.Schema({
    login:{type: String, required:true},
    pass:{type: String, required:true}
});

const Users = mongoose.model('users', UserSchema)


module.exports.getUserByLogin = function(login, call){
    const query = {login: login};
    Users.findOne(query, call)
}
module.exports.comparePass = function(passFromUser, userDBPass, call){
    if(passFromUser === userDBPass){
        call(null, true);
    }
}