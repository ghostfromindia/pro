const mongoose = require('mongoose')

const MatchInfo = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    home:{type: mongoose.Schema.Types.ObjectId, ref:'Team'},
    away:{type: mongoose.Schema.Types.ObjectId, ref:'Team'},
    date:{type: Date},
    deadline:{type: String},
    staus:{type: String}
})

module.exports = mongoose.model('MI', MatchInfo)