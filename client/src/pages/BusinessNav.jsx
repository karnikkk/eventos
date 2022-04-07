import React from "react";
import { Box, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector} from 'react-redux';
import { logout } from "../actions/userActions";  
//import NotificationsIcon from '@mui/icons-material/Notifications';

const useStyle=makeStyles({
header:{
    //border:"2px solid black",
    height:"66px",
    display:"flex",
   // backgroundColor:"red"

    
},
logo:{
    //border:"1px solid red",
    marginLeft:"695px",
    marginTop:"10px",
    cursor:"pointer"
},
item:{
    //border:"1px solid red",
    display:"flex",
    marginLeft:"360px"
    //justifyContent:"flex-end"

},
txt:{fontSize:"12px",marginTop:"23px", cursor:"pointer",
"&:hover":{
    color:"darkorange"
}},
txt2:{fontSize:"12px",marginTop:"23px", cursor:"pointer",marginLeft:"20px",
"&:hover":{
    color:"darkorange"
}}
});
const BusinessNav=()=>{
  const classes=useStyle();
  const alert = useAlert();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    alert.success('logged out successfully.')
  }

    return(
        <>
            <Box className={classes.header}>
                <Box className={classes.logo}><h1>EVENTOS</h1></Box>
                <Box className={classes.item}>
                    <Link to={"/Notification"} style={{textDecoration:"none",color:"black"}}>
                   <Typography className={classes.txt} >NOTIFICATION</Typography>
                   </Link>
                  
                   <Typography className={classes.txt2}>ABOUT US</Typography>
                    <Link to={"/BusinessProfile"} style={{textDecoration:"none",color:"black"}}>
                   <Typography className={classes.txt2}>PROFILE</Typography></Link>
                     <Typography className={classes.txt2}>
                     <Link to="/" onClick={logoutHandler} style={{textDecoration:'none',color:'red'}}>
                                LOGOUT
                     </Link></Typography>
                   

                </Box>
            </Box>
        
        </>
    );
}

export default BusinessNav;