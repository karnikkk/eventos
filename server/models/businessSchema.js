const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const businessSchema= new mongoose.Schema({
    
vendortype:{
    type:String,
    enum: {
        values:[
            
            'Venues',
            'Photographers',
            'Food & Caterers',
            'Decorators',
            "DJ",
            'Clothing',
            'Mehndi',
            'Jewellery '

        ],
        
    },
    required:true
},
name:{
    type:String,
    required:true
},
email:{
    type:String,
    unique:true,
    required:true
},
brandname:{
    type:String,
    required:true
},
des:{
    type:String,
    required:true
},
price:{
    type:String,
    required:true
},
address:{
    type:String,
    required:true
},
city:{
    type:String,
    required:true
},
number:{
    type:Number,
    required:true
},
password:{
    type:String,
    required:true
},
// avatar:{
//     public_id:{
//         type:String,
//         required:true
//     },
//     url:{
//         type:String,
//         required:true
//     }
// },



tokens:[{
    token:{
        type:String,
        required:true
    }
}]


})



businessSchema.pre('save',async function(next){
    if(this.isModified('password')){
            this.password=await bcrypt.hash(this.password,12);
    }
    next();
});

businessSchema.methods.generateAuthToken=async function(){
    try{
        let token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token: token});
        await this.save();
        return token;
    }
    catch(err){
        console.log(err);
    }
}


const businessUser = mongoose.model("businessuser", businessSchema);
module.exports = businessUser