import axios from "axios";
import React, { useState } from "react";
import { Box,makeStyles, Typography,Button } from "@material-ui/core";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { useAlert } from "react-alert";
import { getBookings } from "../actions/bookingAction";
import { useParams } from "react-router-dom";
//import { getAllBookings } from "../../../server/controllers/bookingController";

const useStyle=makeStyles({
linearBox:{
    backgroundColor:"gray",
    color:"white",
    height:"200px",
    //display:"flex"
}

});
const Notification=()=>{

    const [bookings,setBookings] =useState([]);
    

    const getBookings = async () => {
    //     // try{

    //     //     const res = await fetch("/api/b1/AllBooking", {
    //     //         method: "GET",
    //     //         headers: {
    //     //           "Content-type": "application/json"
    //     //         },
    //     //         credentials:"true"
    //     //      });
        
             
    //     //      const data = res.json();
             
    //     //      console.log(data)
    //     // }catch(error){
    //     //     console.log("error found")
    //     // }

        const data = await (await fetch('/api/b1/AllBooking')).json()
        
        
        // console.log(await data.json())
        console.log(data)
         setBookings(data.booking)
        console.log(bookings)
        //console.log(bookings.count)
        // console.log(`data is ${await data.json()}`)
    } 

    useEffect(() =>{
        getBookings();
    },[])

    // const dispatch = useDispatch();
    // const {profilename} = useParams();

    // //const[booking,setBooking] = useState();

     //const {  bookings } = useSelector(state => state.booking)

    // useEffect (() => {
        
    //     dispatch(getBookings());
    //     console.log(bookings)

    // },[dispatch])

    const classes=useStyle()
    return(
    <>
        {/* <BusinessNav/> */}
    
        <Box style={{display:"flex",height:"40px",justifyContent:"center",alignItems:"center",fontSize:"30px"}}>Notifications</Box>
        
             
        {/* {bookings && bookings.filter((booking) => booking.profilename === profilename ).map (booking => (  */}

            {/* {bookings && bookings.map(booking => ( */}

        <Box className={classes.linearBox}>
                 <Typography> Client Name:{bookings.name}</Typography>
                 <Typography>Contact No.:</Typography>
                 <Typography>Event Address:</Typography>
                 <Typography>No. of days:</Typography>
                  <Typography>start date:</Typography>
                  <Typography>end date:</Typography>
                    <Box style={{display:"flex",marginLeft:"335px"}}>
                        <Button style={{backgroundColor:"green",color:"white",marginTop:"20px",height:"18px"}}>Accept</Button>
                        <Button style={{backgroundColor:"red",color:"white",marginTop:"20px",marginLeft:"20px",height:"18px"}}>Reject</Button>

                    </Box>
        </Box>
            {/* ))
            } */}
   {/* ))}   */}
    
    
    
    </>);
}

export default Notification;



