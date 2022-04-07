const User = require ('../models/User')
const jwt = require('jsonwebtoken')
const ErrorHandlers = require('../utils/errorHandlers')
const catchAsyncErrors = require('./catchAsyncErrors')

//check if user is authenticated or not

exports.isAuthenticatedUser = catchAsyncErrors(async(req,res,next)=>{

    const {token} = req.cookies
    //console.log(token)

    if (!token){
        return next(new ErrorHandlers('Login first to access this ressource', 401 ))

    }

    const decoded =jwt.verify(token,process.env.SECRET_KEY)
    req.user = await User.findById(decoded._id);

    next()
})