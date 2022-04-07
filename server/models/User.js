const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken") 
const mongoose = require("mongoose")
const Validator = require('validator')
const crypto = require('crypto');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            validate: [Validator.isEmail,'please enter valid email address'],
            unique: true
        },
        password: {
            type: String,
            required: true,
           
        },
        cpassword: {
            type: String,
            required: true,
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
        role:{
            type: String,
            default:'user'
        },
        resetPasswordToken: String,
        resetPasswordExpire:Date
    //     isAdmin: {
    //         type: Boolean,
    //         default: false,
    //     },
    //     img: { type: String },
    //     tokens: [{
    //         token: {
    //             type: String,
    //             required: true,
    //         }
    //     }
    //     ]
    },
     { timestamps: true }

);



//hashing the password

UserSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});

//generating token

UserSchema.methods.getJwtToken =  function () {
     return jwt.sign({ _id: this.id }, process.env.SECRET_KEY,{

        expiresIn:process.env.EXPIRES_TIME
     });
      
    
}

//generate password reset token

UserSchema.methods.getResetPasswordToken = function() {
    //generate token 
     const resetToken =crypto.randomBytes(20).toString('hex');

    // //hash and set to reset password token
     this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    //set token exoire time 
    this.resetPasswordExpire =  Date.now() + 30*60*1000;

    return resetToken
}


const User = mongoose.model("user", UserSchema);
module.exports = User