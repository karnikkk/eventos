import React from "react";
import { makeStyles,Box, Button } from "@material-ui/core";
import BusinessNav from "./BusinessNav";
import Footer from "../components/Footer";



const useStyle=makeStyles({
mainBox:{
    //border:"2px solid black",
    height:"95vh",
    backgroundColor:"#202021",
    
    display:"flex"
},
left:{
    width:"40%"
},
right:{
    //border:"2px solid blue",
    //color:"white",
    marginLeft:"18px"
    
},
title:{
    color:"white",
    fontSize:"70px",
    marginTop:"190px",
    marginLeft:"25px",
    fontWeight:600
},
des:{
    color:"white",
    fontSize:"20px",
    marginTop:"65px",
    marginLeft:"28px"
}
})
const BusinessDash=()=>{
  const classes=useStyle();
    return(
    <>
    <BusinessNav/>
        <Box className={classes.mainBox}>
            <Box className={classes.left}>
                <img src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?cs=srgb&dl=pexels-fauxels-3184287.jpg&fm=jpg" style={{width:"560px",height:"708px",borderBottomRightRadius:"75%"}} />
            </Box>
            <Box className={classes.right}>
                <Box className={classes.title}>WELCOME TO YOUR DASHBOARD</Box>
                <Box className={classes.des}>Grow Your Business With Eventos !</Box>
                <Button style={{color:"black",backgroundColor:"white",marginTop:"35px",
            marginLeft:"25px",width:"200px",height:"40px",fontWeight:600}}>Contact Us</Button>

            </Box>

        </Box>

        <Footer/>
    
    </>);
}

export default BusinessDash;