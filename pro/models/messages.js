const mongoose = require('mongoose')

const Message = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    mid:{type:mongoose.Schema.Types.ObjectId, ref:'MI'},
    uid:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
    message:{type:String},
    status:{type: String}
})

module.exports = mongoose.model('Message', Message)