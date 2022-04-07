import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BusinessNav from "./BusinessNav";
import Footer from "../components/Footer";
import { makeStyles, Box, Typography, Button, Input, TextField } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyle = makeStyles({
    mainBox: {
        display: "flex",
        height: "80vh",
        backgroundColor: "white"
    },
    left: {
        width: '40%',
        color: 'black',
        display: "flex",
        flexDirection: "column",
        //backgroundColor:'grey',
        //borderBottomRightRadius:"100%"
    },
    right: {
        color: 'black',
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginLeft: "310px",
        marginTop: "60px"
    },
    title: {
        fontSize: "30px",
        fontWeight: 600,
        marginTop: "30px",
        marginLeft: "675px"
    },
    imgs: {
        border: "2px solid black",
        margin: "20px"
    },
    hbx: {
        display: "flex"
    }
});
const BusinessProfile = (image) => {
   
    // const {profiles } = useSelector(state => state.profiles)
    const{user} = useSelector(state => state.auth)
    const classes = useStyle();
   
    console.log(user.name);
    console.log(user.email);
    console.log(user)

    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    

    

    const profileHandleFileInputChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        previewFile(file);
        uploadImage(previewSource);
        console.log("picture submitted successfully")
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        }
    }

   

    const uploadImage = async (base64EncodedImage) =>{
        console.log(base64EncodedImage);
        try{
            await fetch ('/api/p1/profileupload',{
                method:"POST",
                body:JSON.stringify({data: base64EncodedImage}),
                headers:{'Content-type' : 'application/json' }
            })
        }catch(error) {
            console.log(error);
        }
    }

    // console.log(profiles)
    return (<>
        <BusinessNav />

        <Box className={classes.mainBox}>
            <Box className={classes.left}>
                {
                    previewSource && (

                        <img src={previewSource} alt="chosen" style={{ height: '350px', marginTop: "50px", marginLeft: "160px", borderRadius: "9px" }}></img>
                    )
                }

               <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="contained-button-file"
                    onChange={profileHandleFileInputChange}
                    value={fileInputState}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" 
                            type = "Upload"
                            style={{ backgroundColor: "#4f89f1", color: "white", width: "200px", marginTop: "30px", marginLeft: "180px" }} component="span">
                       Change a Profile
                    </Button>
                </label>



            </Box>
            <Box className={classes.right}>
                <Typography style={{ fontSize: "20px", marginTop: "30px" }}>Brand:{user.name}</Typography>
                <Typography style={{ fontSize: "20px", marginTop: "30px" }}>Email:</Typography>
                <Typography style={{ fontSize: "20px", marginTop: "30px" }}>Vendor Type:</Typography>
                <Typography style={{ fontSize: "20px", marginTop: "30px" }}>City:</Typography>
                <Typography style={{ fontSize: "20px", marginTop: "30px" }}>Address:</Typography>
                <Typography style={{ fontSize: "20px", marginTop: "30px" }}>Phone:</Typography>




                <Button style={{ backgroundColor: "white", marginTop: "30px", width: "200px" }}>Edit Profile</Button>

            </Box>
        </Box>

        <Box className={classes.lowerBox}>
            <Box className={classes.hbx}>
                <Box className={classes.title}>PHOTO GALLERY</Box>
                <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="contained-button-file"
                    multiple
                    // onChange={profileprofileHandleFileInputChange}
                    // value={fileInputState}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" style={{ backgroundColor: "#4f89f1", color: 'white', height: "30px", marginTop: "35px", marginLeft: "400px" }} component="span">
                        Upload photos
                    </Button>
                </label>

               
            </Box>
            <Box className={classes.imgs}></Box>
        </Box>
        {/* <Footer/> */}
    </>);
}
export default BusinessProfile;