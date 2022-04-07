const express = require ('express')
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require("bcryptjs");
const crypto = require('crypto')
const sendToken = require ("../utils/jwtToken")
const catchAsyncError = require('../middlewares/catchAsyncErrors');
const cloudinary = require('../utils/cloudinary')
const upload = require ("../utils/multer")
const businessUser= require("../models/businessSchema")



const { getProfiles, newProfile,getSingleProfile,updateProfile} = require ("../controllers/profileController")

const {isAuthenticatedUser} = require('../middlewares/auth')

// router.use(express.json({limit:'50mb'}))
// router.use(express.urlencoded({limit:'50mb',extentded:true}))
router.post("/businessRegister", async (req, res) => {

    const { vendortype,name,email,brandname,des,price,address,city,number,password } = req.body;

    if (!vendortype||!name||!email||!brandname||!des||!price||!address||!city||!number||!password) {
        return res.status(422).json({ error: "please fill required blanks" })
    }

    try {

        const userExist = await businessUser.findOne({ email: email })

        if (userExist) {
            return res.status(422).json({ error: "Email already exists" });
        }
        else{

            const businessuser = new businessUser({vendortype,name,email,brandname,des,price,address,city,number,password });
    
             await businessuser.save();
            
             res.status(201).json({ message: "user registered successfully" });
           
             sendToken(businessuser,200,res)
        }



    } catch (err) {
        console.log(err);
    }



});
router.post ("/businessLogin", async (req,res,next) => {
    try{
        const {  email, password } = req.body;
        
        if(!email || !password ){
            return res.status(400).json({error:"pls fill required data"});
        }

        //finding the user in database
        const userLogin = await businessUser.findOne({email:email});
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
         
            // const token = await userLogin.getJwtToken();
            // res.cookie("token",token,{
            //     expires:new Date(Date.now() + 25892000000),
            //     httpOnly:true
            // });
    
    
        if (!isMatch){
            res.status(400).json({error:"invalid credential"});
        }else{
                 res.status(201).json({
                  success:true,
                  message: "user loggedin successfully"
                
              })
        }
        }else{
            res.status(400).json({error:"invalid credential"});
        }
        

    }   catch(err){
        console.log(err);
    } 
})
// exports.getSingleProfile = catchAsyncError (async (req,res ,next) => {

//     const businessuser = await businessUser.findById(req.params.id);

//     if(!profile){
//         return next(new ErrorHandlers('profile not found',404))
               
//     }
//     res.status(200).json({
//         success : true,
//         businessuser
//    })
   
// })

// exports.getBusinessUserProfile = catchAsyncError(async(req,res,next) => {
//     const businessuser = await businessUser.findById(req.businessuser._id);

//     res.status(200).json({
//         success:true,
//         businessuser
//     })
// })

 router.post("/profileUpload",upload.single("image"),async (req,res) => {

//     // cloudinary.config({
//     //     cloud_name: 'dsw5rd61y', 
//     //    api_key: '277396182583125',
//     //    api_secret: 'op2AELSOSAbcejCk6Uwd7bU3-Ks'

//     // })

    try{
        const fileStr = req.body.data;
        const uploadedResponse = await cloudinary.uploader.upload(fileStr,{
            upload_preset:'Eventos_uploader'
        })
        console.log(uploadedResponse);
        res.json({msg:"YAYAYA"})
        
        // const result = await cloudinary.uploader.upload(req.file.path);
        // res.json(result);

    }catch(err){
        console.log(err);
        res.status(500).json({err : "Something went wrong"})
    }
})


router.route ('/profiles').get(isAuthenticatedUser,getProfiles);
//router.route ('/profile/:id').get(getSingleProfile);
router.route ('/admin/profile/new').post(newProfile);
router.route ('/admin/profile/:id').put(updateProfile);



module.exports =router;

