const mongoose = require('mongoose')

const Tournament = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    title:{type: String},
    teamcount:{type:Number},
    img:{type: String}
})

module.exports = mongoose.model('Tournament', Tournament)