const mongoose = require('mongoose')

const Players = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type: String},
    img:{type: String},
    credit:{type: String}
})

module.exports = mongoose.model('Players', Players)