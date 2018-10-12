const mongoose = require('mongoose')

const LASTBAT = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    type:{type: String},
    pid:{type:Number},
    runs:{type: String},
    balls:{type: String},
    outmethod:{type: String},
    notes:{type: String},
})

module.exports = mongoose.model('LASTBAT', LASTBAT)