const Tournament = require('../models/tournament')
const mongoose = require('mongoose')

exports.get = (req,res,next)=>{
    Tournament.find().select('_id title teamcount img').exec().then(docs=>{
        if(docs.length > 0){
            res.status(200).json({
                status:true,
                result: docs,
                message: "Tournament fetched successfully"
            })
        }else{
            res.status(400).json({
                status:false,
                message: "No Tournament found"
            })
        }
        
    }).catch(err=>{
        res.status(500).json({
            status:false,
            message: "Internal error"
        })
    })
   
}
exports.create = (req,res,next)=>{
   const title = req.body.title
   const teamcount = req.body.teamcount
   const img = req.body.img

   const t = new Tournament({
       _id: new mongoose.Types.ObjectId(),
       title:title,
       teamcount:teamcount,
       img:img
   })

   t.save().then(result=>{
       res.status(200).json({
           status:true,
           result:result,
           message:"Tournament created successfully"
       })
   }).catch(err=>{
        res.status(500).json({
            status:false,
            error:err,
            message:"Internal error"
        })
   })
}