import {
    BOOKING_REQUEST,
    BOOKING_SUCCESS,
    BOOKING_FAIL,

    CLEAR_ERRORS
} from "../constants/bookingConstants"


export const bookingReducer = (state={ bookings:[] } , action ) => {
    switch(action.type){
        case BOOKING_REQUEST:
            return {
               loading:true,
                bookings:[]
            }
        
        case BOOKING_SUCCESS:
            return{
                loading:true,
                bookings:action.payload.bookings
            }
        
        case BOOKING_FAIL:
            return{
                loading:false,
                error:action.payload
            }  
            
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
    
        default:
            return state
    }
} 