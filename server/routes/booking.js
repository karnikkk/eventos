const express = require ('express')
const router = express.Router();

const { newBooking,getAllBookings } = require('../controllers/bookingController')


router.route('/booking').post(newBooking)
router.route('/Allbooking').get(getAllBookings)



module.exports =router;