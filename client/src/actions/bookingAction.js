import axios from 'axios';

import {
    BOOKING_REQUEST,
    BOOKING_SUCCESS,
    BOOKING_FAIL,

    CLEAR_ERRORS
} from "../constants/bookingConstants"


export const getBookings = () => async (dispatch) => {
    try{

        dispatch({
            type:BOOKING_REQUEST
        })

        const {data} = await axios.get('/api/b1/Allbooking')

    dispatch({
        type:BOOKING_SUCCESS,
        payload:data
    })
    }
    
    catch(error){
        dispatch({
            type:BOOKING_FAIL,
            payload:error.message.data.message
        })
    }

}