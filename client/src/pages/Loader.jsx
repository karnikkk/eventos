import { Box,makeStyles, Typography } from '@material-ui/core';
//import  styled  from "styled-components"
import React from 'react'
import { Link } from 'react-router-dom';
import PropagateLoader from "react-spinners/PropagateLoader";


const useStyle =  makeStyles({
  loader:{
    size: 15,
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
    marginTop:"300px"
  }
 
  
}
)



const Loader = () => {
  const classes = useStyle();
  return (
    <>
    
    <Box className={classes.loader}>
      <PropagateLoader/>
      <Link to={"/Login"}>
      <Typography  style={{marginTop:"20px",marginLeft:"-56px"}}>Click Here to login</Typography></Link>
    </Box>
    
    </>
  )
}

export default Loader
