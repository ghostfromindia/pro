const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyparser = require('body-parser')

// Routes
const tournament = require('./pro/routes/tournament')

app.use(cors())
app.get('/',(req,res)=> res.status(200).json({status:false}))
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())


//Database
mongoose.connect('mongodb://'+process.env.MONGO_US+':'+process.env.MONGO_PW+'@cluster0-shard-00-00-uxk85.mongodb.net:27017,cluster0-shard-00-01-uxk85.mongodb.net:27017,cluster0-shard-00-02-uxk85.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true@cluster0-shard-00-00-uxk85.mongodb.net:27017,cluster0-shard-00-01-uxk85.mongodb.net:27017,cluster0-shard-00-02-uxk85.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', { useNewUrlParser: true })
mongoose.Promise = global.Promise

app.use('/tournament',tournament)

app.use((req, res, next)=>{
    const error = new Error('Not Found')
    error.status = 404;
    next(error);
});


app.use((error, req, res, next)=>{
    res.status(error.status || 500)
    res.json({
        status:false,
        message:error.message
    });
});



module.exports = app;