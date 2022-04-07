import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { makeStyles,Box, Typography, Button } from "@material-ui/core";
import { useDispatch, useSelector} from 'react-redux'


const useStyle=makeStyles({
mainBox:{
    display:"flex",
    height:"100vh",
    backgroundColor:"black"
},
left:{
    width:'40%',
    color:'#f5d386',
    //backgroundColor:'grey',
    //borderBottomRightRadius:"100%"
},
right:{
    color:'#f5d386',
    width:"100%",
    display:"flex",
    flexDirection:"column",
    marginLeft:"310px",
    marginTop:"120px"
}
});
const UserProfile=()=>{
    const {user} = useSelector(state => state.auth)
    const classes=useStyle();
    return(<>
    <Navbar/>

    <Box className={classes.mainBox}>
       <Box className={classes.left}>
        
         <img src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?cs=srgb&dl=pexels-nitin-khajotia-1516680.jpg&fm=jpg" style={{height:'350px',marginTop:"50px",marginLeft:"160px",borderRadius:"9px"}}></img>
         {/* <Button style={{backgroundColor:"white",marginTop:"125px",marginLeft:"-175px"}}>Change Photo</Button> */}
        </Box>
       <Box className={classes.right}>
       <Typography style={{fontSize:"30px",marginTop:"40px"}}>Email: {user.email}</Typography>
        <Typography style={{fontSize:"30px",marginTop:"40px"}}>UserName: {user.username}</Typography>
        
        {/* <Button style={{backgroundColor:"white",marginTop:"50px",width:"200px"}}>Edit Profile</Button> */}

       </Box>
    </Box>
    <Footer/>
    </>);
}

export default UserProfile;