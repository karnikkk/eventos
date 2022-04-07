import React, { useEffect } from 'react'
import { useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { makeStyles, Box, Typography, Button } from '@material-ui/core';
import InfoDialog from "./InfoDialog"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAlert } from 'react-alert';
import { getProfileDetails, clearErrors } from '../actions/profileActions';
import { useLocation, useParams } from "react-router-dom";

const useStyle = makeStyles({

    mainBox: {
        //border:"2px solid red",
        height: "100vh",
        //width:"100vw"
    },
    innerBox: {
        backgroundColor: "black",
        height: "70vh",
        display: "flex",
        //border:"2px solid red",
        color: "white"
        //flexDirection:"column",
        //justifyContent:"center",
        //alignItems:"center"

    },
    left: {
        width: "40%"
    },
    right: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginLeft: "110px"
        //justifyContent:"center",
        //alignItems:"center"
    },
    name: {

        color: "white",
        fontSize: "75px",
        marginTop: "55px",
        marginLeft: "0px",
        fontWeight: 600
    },
    des: {
        marginTop: "40px",
        //textAlign:"center",
        width: "80%",

    },
    priceBox: {
        marginTop: "40px",
        fontSize: "30px"
    },
    city: {
        marginTop: "30px",
        display: "flex"
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
    }
});

const ProfileDetails = () => {
    const classes = useStyle();

    // const location =useLocation();
    // console.log(location);
    // const id = location.pathname.split("/")[2];
    const {id} = useParams();

    const [profileDetails,setProfileDetails] = useState(null);

    useEffect(() => {
        const getProfileDetails = async() =>{
            try{
                const res =await axios.get(`http://localhost:5000/api/p1/profile/${id}`);
                
                setProfileDetails(res.data.profile);
            }catch{}
        };

        getProfileDetails()

    },[id]);
    


    const [open, setOpen] = useState(false);
    const openDialog = () => {
        setOpen(true);
    }
    return (
        <>
            <Navbar />
            <Box className={classes.mainBox}>
                {
                    profileDetails !==null && 
                <>
                <Box className={classes.innerBox}>

                    <Box className={classes.left}><img src="https://images.pexels.com/photos/1854897/pexels-photo-1854897.jpeg?cs=srgb&dl=pexels-marcelo-chagas-1854897.jpg&fm=jpg" style={{ height: '520px', width: "615px", borderBottomRightRadius: "80%" }}></img>
                    </Box>

                    <Box className={classes.right}>
                        <Box className={classes.name}>{profileDetails.name}</Box>
                        <Box className={classes.des}>{profileDetails.desc}
                        </Box>
                        <Box className={classes.city}>
                            <LocationOnIcon /><Typography>{profileDetails.city}</Typography>
                        </Box>
                        <Box className={classes.priceBox}>
                            PRICE : {profileDetails.price} rs/day
                        </Box>
                        <Button onClick={() => openDialog()} style={{ backgroundColor: "white", width: "400px", marginTop: "60px" }}>Request A Booking </Button>
                        <InfoDialog open={open} setOpen={setOpen} profilename = {profileDetails.name} />

                    </Box>


                </Box>

                <Box className={classes.lowerBox}>
                    <Box className={classes.title}>PHOTO GALLERY</Box>
                    <Box className={classes.imgs}></Box>
                </Box>
                </>
                }
            </Box>

            <Footer />
        </>
    )
}

export default ProfileDetails
