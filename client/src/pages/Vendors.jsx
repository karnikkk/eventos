import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getProfiles } from "../actions/profileActions";
import { useParams,Link } from "react-router-dom";
import Loader from "./Loader"


const useStyle = makeStyles({
  Title: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: "24px",
    marginTop: "100px",
    paddingTop: "",
    marginRight: '32px',
    fontWeight: 600
  },
  mainbox: {
    height: "auto",
    width: "100%",
  },

  linearbox: {
    display: "flex",
    marginTop: "25px",
    alignItems: "center",
    justifyContent: "center",
  },
  b: {
    cursor: 'pointer',
    padding: "10px",
    backgroundColor: "#ffffff",
    height: "auto",
    borderRadius: "8px",
    width: "265px",
    marginRight: "40px",
    boxShadow: "2px 5px 2px #8887ab",
    border: "1px solid black"
  },
  
});

const Vendors = () => {
  const classes = useStyle();
  const { vendortype } = useParams();
  const disptach = useDispatch();

  const { loading, profiles, error } = useSelector(state => state.profiles)
  useEffect(() => {
    disptach(getProfiles());
  }, [disptach])


  return (
    <>
    {loading ? (<Loader/>) : (
      <>

      <Navbar />
      <Box className={classes.Title}>{vendortype}</Box>
      <Box className={classes.mainbox}>
        <Box className={classes.linearbox}>

          {profiles && profiles.filter((profile) => profile.vendortype === vendortype).map(profile => (
            //<profile key={profile.category} profile={profile}/>
           
            <Link to = {`/VendorDetails/${profile._id}`} key={profile._id} style={{textDecoration:'none',color:'black'}}>

            <Box className={classes.b}>

              <img
                src="https://images.pexels.com/photos/7184081/pexels-photo-7184081.jpeg?cs=srgb&dl=pexels-the-shaan-photography-7184081.jpg&fm=jpg"
                style={{
                  height: "187px",
                  width: "264px",
                  marginLeft: "0px",
                  borderTopLeftRadius: "0px",
                }}
              />
              <Box className={classes.Info}>
                <Typography
                  style={{
                    marginLeft: "15px",
                    fontSize: "24px",
                    marginTop: "20px",
                    fontFamily: "Abel",
                    fontWeight: "700",
                    cursor: 'pointer'
                  }}
                >
                  {profile.name}
                </Typography>
                <Typography
                  style={{
                    marginLeft: "15px",
                    fontSize: "16px",
                    marginTop: "10px",
                    width: "175px",
                    fontFamily: "Abel",
                  }}
                  >
                  {profile.description}
                </Typography>
              </Box>
            </Box>
          </Link>
          ))}


        </Box>
      </Box>
      </>
    )}
    </>
    );
  };

export default Vendors;