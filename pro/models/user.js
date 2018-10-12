const mongoose = require('mongoose')

const User = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    mobile:{type: String},
    otp:{type:Number},
    status:{type: String}
})

module.exports = mongoose.model('User', User)