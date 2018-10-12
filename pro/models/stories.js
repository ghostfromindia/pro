const mongoose = require('mongoose')

const Story = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    mid:{type:mongoose.Schema.Types.ObjectId, ref:'MI'},
    title:{type:String},
    img:{type:String},
    body:{type:String},
    datetime: { type: Date, default: new Date() },
    count:{type:Number},
    status:{type: String}
})

module.exports = mongoose.model('Story', Story)