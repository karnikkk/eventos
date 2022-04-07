const jwt = require('jsonwebtoken');
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User")
const sendToken = require ("../utils/jwtToken")
const sendEmail = require('../utils/sendEmail')
const crypto = require('crypto')
const ErrorHandler = require ('../utils/errorHandlers')
const catchAsyncError = require('../middlewares/catchAsyncErrors');
const { isAuthenticatedUser } = require('../middlewares/auth');

 
router.post("/register", async (req, res) => {
 
    const { username, email, password,cpassword } = req.body;

    if (!username || !email || !password ||  !cpassword) {
        return res.status(422).json({ error: "please fill required blanks" })
    }

    try {

        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.status(422).json({ error: "Email is already exist" });
        }else if (password != cpassword){
            return res.status(422).json({ error: "password is not matching" });
        }else{

            const user = new User({ username, email, password ,cpassword});
    
             await user.save();
            
             //res.status(201).json({ message: "user registered successfully" });
           
             sendToken(user,200,res)
        }



    } catch (err) {
        console.log(err);
    }



});

//login 

router.post ("/login", async (req,res,next) => {
    try{
        const {  email, password } = req.body;
        
        if(!email || !password ){
            return res.status(400).json({error:"pls fill required data"});
        }

        //finding the user in database
        const userLogin = await User.findOne({email:email});
         //console.log(userLogin);

         //check if password id correct or not
        //  const isPasswordMatched  = await bcrypt.compare (password,userLogin.password)

        //  if (!isPasswordMatched){
        //      return  next (new ErrorHandler('invalid email or password',401))

        //  }

        //  const token = userLogin.getJwtToken();

        //  res.status(200).json({
        //      success:true,
        //      token
        //  })

        if(userLogin){

            const isMatch = await bcrypt.compare(password,userLogin.password);

            //sendToken(userLogin ,200 , res )
         
            const token = await userLogin.getJwtToken();
            res.cookie("token",token,{
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            });
    
    
        if (!isMatch){
            res.status(400).json({error:"invalid credential"});
        }else{
                 res.status(201).json({
                  success:true,
                  message: "user loggedin successfully",
                  token
              })
        }
        }else{
            res.status(400).json({error:"invalid credential"});
        }
        

    }   catch(err){
        console.log(err);
    } 
})

// Get user profile 
exports.getUserProfile = catchAsyncError(async(req,res,next) => {
    const user = await User.findById(req.user._id);

    res.status(200).json({
        success:true,
        user
    })
})

//upadate User profile => /api/auth/me/update

exports.updateProfile = catchAsyncError(async(req,res,next) =>{
    const newUserData={
        username:req.body.username,
        email:req.body.email
    }

    //update avatar:TODO
    const user = await User.findByIdAndUpdate(req.user._id, newUserData,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true
    })
})




//Logout user
router.get("/logout", async (req,res) =>{
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })

    res.status(200).json({
        success:true,
        message:"user logged out"
    })
})

//Fogot password => /password/forgot

exports.forgotPassword = catchAsyncError(async (req,res,next) => {
    
    const user = await User.findOne({email: req.body.email});

    if(!user){
        return  next(new ErrorHandler('user not found with this email',404 ));
    }

    //get reset token
    const resetToken = user.getResetPasswordToken();
    await user.save({ validationBeforeSave: false})

    //create reset password url
    const resetUrl = `${req.protocol}://${req.get('host')}/api/auth/password/reset/${resetToken}`

    const message = `your password reset token is as follow:\n\n${resetUrl}\n\n If you have not requested this email ,then ignore it.`

    try{

        await sendEmail({
            email:user.email,
            subject:"EVENTOS password Recovery",
            message
        })

        res.status(200).json({
            success:true,
            message:`Email sent to : ${user.email}`
        })


    }catch(error){
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({validationBeforeSave:false});

        return next(new ErrorHandler(error.message,500))
    }
})
//Reset password => /password/reset/:token

exports.resetPassword = catchAsyncError(async (req,res,next) => {

    //Hash URL token 
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex')
    
    
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire:{ $gt:Date.now()}
    })

    if(!user){
        return next(new ErrorHandler('password reset token is invalid or has been expired',400))
    }

    if(req.body.password !== req.body.confirmPassword){
        return next(new ErrorHandler ('password does not match',400))
    }

    //setup new password
    user.password = req.body.password;

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user,200,res)


})





//router 
router.route('/login')
router.route('/me').get(isAuthenticatedUser,this.getUserProfile)
router.route('/me/update').put(isAuthenticatedUser,this.updateProfile)
router.route('/password/forgot').post(this.forgotPassword)
router.route('/password/reset/:token').put(this.resetPassword)

module.exports = router