const Booking = require('../models/booking')
const ErrorHandlers =  require ("../utils/errorHandlers")
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const router = require('../routes/auth')
const APIfeartures = require('../utils/apiFeatures')



//post the booking request

exports.newBooking = catchAsyncErrors(async(req,res) => {

    const booking = await Booking.create(
        req.body
        )       
        
      
    res.status(200).json({
            success:true,
            booking
        })
       
        
})


//get booking  => api/b1/AllBookings

exports.getAllBookings = catchAsyncErrors (async (req,res ,next) => {

    const apiFeatures = new APIfeartures(Booking.find(),req.query).search()

    const booking = await apiFeatures.query;
    //  const booking = await Booking.find();
  
    if(!booking){
        return next(new ErrorHandlers('booking request is not found',404))
               
    }
    res.status(200).json({
        success : true,
        count:booking.length,
        booking
   })
   
})
 //const { name, contact,address,sdate,edate } = req.body;
    
        // if (!name ||contact || !address ||  !sdate || !edate) {
       //     return res.status(422).json({ error: "please fill required blanks" })
       // }
    
       // try{
           
       //     const booking = new Booking({ name, contact,address,sdate,edate });
       
       //     await booking.save();
    
       // }catch(err)
       // {
       //     console.log(err)
       // }
