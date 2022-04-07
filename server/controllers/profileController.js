const Profile = require ('../models/businessSchema')
const APIfeartures =  require("../utils/apiFeatures")
const ErrorHandlers = require('../utils/errorHandlers')
const catchAsyncErrors = require ('../middlewares/catchAsyncErrors')


//create new profile   =>  /api/p1/profile/new

exports.newProfile =catchAsyncErrors (async(req,res,next) => {

    const profile =await Profile.create(req.body)
    
    res.status(201).json({
        success:true,
        profile 
    })
})

//Get all the profiles  => /api/p1/profiles?keyword=photographer
exports.getProfiles = catchAsyncErrors (async (req,res ,next) => {
    
    const apiFeatures = new APIfeartures(Profile.find(), req.query )
                        .search()

    const profiles = await apiFeatures.query;

    res.status(200).json({
        success : true,
        count : profiles.length,
        profiles
   })
   
})

//get singleprofile => /api/p1/singleprofile

// exports.getSingleProfile = catchAsyncErrors (async (req,res ,next) => {

//     const profile = await Profile.findById(req.params.id);

//     if(!profile){
//         return next(new ErrorHandlers('profile not found',404))
               
//     }
//     res.status(200).json({
//         success : true,
//         profile
//    })
   
// })

//Update profile => /api/p1/admin/profile/:id
exports.updateProfile = catchAsyncErrors (async (req,res ,next) => {
    
    let profile = await Profile.findById(req.params.id);

    if(!profile) {
        return next(new ErrorHandlers('profile not found',404))
       
    }

    profile = await Profile.findByIdAndUpdate(req.params.id , req.body,{
        new:true,
        runValidators: true,
        useFindModify:false
    });

    res.status(200).json({
        success:true,
        profile
    })
})






