const ErrorHandlers = require("../utils/errorHandlers")

module.exports = (err, req,res, next) => {
    err.statusCode= err.statusCode || 500;
   
    if (process.env.NODE_ENV === 'DEVLOPMENT'){
        res.status(err.statusCode).json({
            success : false,
            error :err,
            errMessage : err.message,
            stack: err.stack
        })
    }
    if (process.env.NODE_ENV === 'PRODUCTION'){
        let error = {...err}

        error.message = err.message
        
            res.status (err.statusCode).json({
                success:false,
                message:error.message || 'Internal Server Error'
            })
    }
}