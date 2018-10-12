const mongoose = require(mongoose)

const MatchPreviewSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    title:{type:String},
    body:{type:String},
    img: {type:String},
    datetime: { type: Date, default: new Date() },
}) 

module.exports = mongoose.model('MP',MatchPreviewSchema)