const mongoose = require('mongoose')

const LASTBOW = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    type:{type: String},
    pid:{type:Number},
    wickets:{type: String},
    over:{type: String},
    economy:{type: String},
    notes:{type: String},
})

module.exports = mongoose.model('LASTBOW', LASTBOW)