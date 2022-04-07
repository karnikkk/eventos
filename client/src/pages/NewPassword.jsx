// import React, { useEffect,useState } from 'react'
// import { makeStyles,Box, Typography, TextField, Button } from "@material-ui/core";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import {useDispatch,useSelector} from 'react-redux'
// import { resetPassword,forgotPassword,clearErrors} from '../actions/userActions'
// import {useAlert} from 'react-alert'
// import { useParams } from 'react-router-dom';

// const useStyle=makeStyles({
//     mainBox:{
//         backgroundColor:"black",
//         height:"100vh",
//        // display:"flex"
//     },
//     innerBox:{
//         backgroundColor:"white",
//         height:"180px",
//         width:"600px",
//         borderRadius:"12px",
//         marginLeft:"485px",
//         marginTop:'200px'
//     }
//     });

// const NewPassword = ({history,match}) => {

//     const {token} = useParams();


//     const setPassword = async(e) => {
//         e.preventDefault();
//         const [password ,setPassword] = useState('')
//         const [confirmpassword , setConfirmPassword] = useState('')

//         const res = await fetch(`/api/auth/password/reset/${token}`,{
//             method:"PUT",
//             headers: {
//                 "Content-type": "application/json"
//               },
        
//               body: JSON.stringify({
//                  password ,
//                  confirmpassword
        
//               })
//             });
      
//             const data = res.json();
      
//             if (res.status === 400 || !data){
//               window.alert("Invalid credintial")
//             }else{
//               //window.alert("Log In successfully!")
//               alert.success('password updated successfully.')
//               history.push("/");
//             }
//           };
        
    


//     // const alert = useAlert();
//     // const dispatch = useDispatch();
//     // const {error , loading, message,success} = useSelector(state => state.forgotPassword)

//     // useEffect(() => {
//     //     if(error){
//     //         alert.error(error);
//     //         dispatch(clearErrors());
//     //     }
//     //     if (success){
//     //         alert.success('passwrod updated successfully')
//     //         history.push('/login')
//     //     }
//     // },[dispatch,alert,error,success])

//     // const submitHandler = (e) => {
//     //     e.preventDefault();
//     //     const formData = new FormData();
//     //     formData.set('password',password)
//     //     formData.set ('confirmPassword',confirmpassword)

//     //     dispatch(resetPassword(match.params.token,formData))
//     // }
//     const classes=useStyle();
//     return (
//         <>
//         <Navbar/>
//         <Box className={classes.mainBox}>
//             <Box className={classes.innerBox}>
//                 <form >


//                     <Typography style={{fontSize:"29px",fontWeight:600,marginTop:"12px",marginLeft:"125px"}}>NEW PASSWORD!</Typography>
//                     <TextField value={password} onChange={(e) => setPassword(e.target.value)} 
//                     style={{marginTop:"20px",marginLeft:"120px"}} label="Enter New Password "></TextField>
//                      <TextField value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} 
//                     style={{marginTop:"20px",marginLeft:"120px"}} label="Confirm New Password"></TextField>
//                     <Button  onClick={setPassword}
//                     style={{backgroundColor:"black",color:'white',marginTop:"25px",marginLeft:"30px"}}
//                     >Set Password</Button>
//                 </form>
                
//             </Box>
//         </Box>
//         {/* <Footer/> */}
//         </>)
// }

// export default NewPassword
