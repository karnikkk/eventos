import React, { useEffect,useState } from 'react'
import { makeStyles,Box, Typography, TextField, Button } from "@material-ui/core";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useDispatch,useSelector} from 'react-redux'
import { forgotPassword,clearErrors} from '../actions/userActions'
import {useAlert} from 'react-alert'

const useStyle=makeStyles({
mainBox:{
    backgroundColor:"black",
    height:"100vh",
    display:"flex"
},
innerBox:{
    backgroundColor:"white",
    height:"180px",
    width:"600px",
    borderRadius:"12px",
    marginLeft:"485px",
    marginTop:'200px'
}
});



const ForgotPass = () => {
    const classes=useStyle();
    const [email , setEmail] = useState ('')

    const alert = useAlert();
    // const dispatch = useDispatch();
     const { error,loading , message} = useSelector(state => state.forgotPassword)

    const sendEmail = async (e) => {
        e.preventDefault();
  
        const res = await fetch("/api/auth/password/forgot", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
    
          body: JSON.stringify({
             email
            })
        });
  
        const data = res.json();
  
        if (res.status === 400 || !data){
          alert.error("email is not sent")
        }else{
          //window.alert("Log In successfully!")
          alert.success('email is succesfully sent')
        }
      };
  
    
    // useEffect(() => {

    //     if(error) {
    //         alert.error(error);
    //         dispatch(clearErrors());

    //     }

    //     if(message){
    //         alert.success(message)
    //     }
    // },[dispatch,alert,error,message])

    // const submitHandler = (e) => {
    //     e.preventDefault();
        
    //     const formData = new FormData();
    //     formData.set('email',email);
    //     console.log(formData)

    //     dispatch(forgotPassword(formData))
    // }



    return (
        <>
        {/* <Navbar/> */}
        <Box className={classes.mainBox}>
            <Box className={classes.innerBox}>
                

                    <Typography style={{fontSize:"29px",fontWeight:600,marginTop:"12px",marginLeft:"125px"}}>FORGOT PASSWORD?</Typography>
                    <TextField value={email} onChange={(e) => setEmail(e.target.value)} 
                    style={{marginTop:"20px",marginLeft:"120px"}} label="Enter Your Email"></TextField>
                    <Button onClick={sendEmail}  
                    style={{backgroundColor:"black",color:'white',marginTop:"25px",marginLeft:"30px"}}
                    >Send Email</Button>
                
            </Box>
        </Box>
        {/* <Footer/> */}
        </>)
    };

export default ForgotPass
