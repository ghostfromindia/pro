const mongoose = require('mongoose')

const Teams = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type: String},
    img:{type: String},
    tournament:{type: mongoose.Schema.Types.ObjectId, ref:'tournament'}
})

module.exports = mongoose.model('Teams', Teams)