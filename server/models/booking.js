const mongoose = require ('mongoose')

const bookingSchema = mongoose.Schema({

    name:{
        type:String,
        required:[true,'Enter your Name ']
    },
    contact:{
        type:String,
        required:true,
        minlength: [10,'your mobile number must have 10 digits'],
    },
    address:{
        type:String,
        required:true
    },
    days:{
        type:Number,
        required:true
    },

    sdate:{
        type:String,
        format:Date,
        required:[true,"Enter Date on when is ur event is going to be happpen"]
    },
    edate:{
        type:String,
        format:Date,
        required:[true,"Enter Date on when is ur event is going to be happpen"]
    },
    profilename:{
        type:String,
        required:true
    }
   
    
   
})

module.exports = mongoose.model('booking',bookingSchema)