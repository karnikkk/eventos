import React from "react";
import {Box,makeStyles,Typography,TextField,Button,Select,MenuItem, InputLabel} from "@material-ui/core";
import lp from "./login/lp.png";
import { useState } from "react";
import { Link,useHistory, } from "react-router-dom";
import { useAlert } from 'react-alert';



const useStyle=makeStyles({
mainBox: {
        //backgroundColor:"red",
        alignItems: "center",
        justifyContent: "center",
      },
innerBox:{
    display: "flex",
    //backgroundColor:"red",
    //alignItems:"center",
    //justifyContent:"center",
    border: "12px solid #7ab6ef",
    width: "50%",
    height: "100vh",
    marginTop: "30px",
    marginLeft: "370px",
},
left:{
    width:"47%",
    backgroundColor:"#7ab6ef"
},
tf:{
    //border:"2px solid black",

        padding: "5px 52px",
        display: "flex",
        marginLeft:"-10px",
        flex: 1,
        flexDirection: "column",
        "& > *": {
          marginTop: 10,
        },
      
}
})
const BusinessRegister=()=>{
  const history=useHistory()
  const alert = useAlert()

  const [user,setUser]=useState({
    vendortype:"",name:"",email:"",brandname:"",des:"",price:"",address:"",city:"",number:"",password:""
  })
  let name,value;
  const handleInputs=(e)=>{
      console.log(e);
      name=e.target.name;
      value=e.target.value;

      setUser({...user,[name]:value});
  }
  async function PostData(e){
    e.preventDefault();
    const { vendortype,name,email,brandname,des,price,address,city,number,password}=user;
    const resp= await fetch('http://localhost:5000/api/p1/businessRegister',{
      method:'POST',
          headers:{
            'Content-Type':"application/json"
          },
          body:JSON.stringify({
            vendortype,name,email,brandname,des,price,address,city,number,password
          })

    })

    const data=await resp.json();

    if (resp.status === 422 || !data) {
      window.alert("Invalid registration");
      console.log("Invalid registration");
    } else {
      window.alert("successfull Registration");
      console.log("successfull registration");

      history.push("/BusinessLogin");
    }
    
    // console.log(data);
  } 
  

    const classes=useStyle();
    

    return(
        <>
        
        <Box className={classes.mainBox}>
            <Box className={classes.innerBox}>
                <Box className={classes.left}>
                    <img src={lp}
                     style={{
                        height: "210px",
                        width: "210px",
                        padding: "20px",
                        marginTop: "100px",
                        marginLeft: "54px",
                      }}/>

<Typography
              style={{
                fontSize: "30px",
                color: "white",
                fontWeight: 610,
                marginLeft: "108px",
                marginTop: "-5px",
                fontFamily: "cursive",
              }}
            >
              EVENTOS
            </Typography>
            <Typography
              style={{
                color: "white",
                fontWeight: 500,
                fontFamily: "cursive",
                marginLeft: "50px",
                marginTop: "20px",
              }}
            >
              Grow Your Business With Eventos!
            </Typography>
                </Box>
                <Box className={classes.right}>

                    <Typography  style={{
                fontSize: "20px",
                color: "rgb(93 154 213)",
                //   color:"black",
                fontWeight: 561,
                fontFamily: "cursive",
                marginTop: "15px",
                marginLeft: "30px",
              }}>"Grow Your Business With Eventos"</Typography>

              <Typography style={{
                fontSize: "14px",
                color: "rgb(93 154 213)",
                //   color:"black",
                fontWeight: 561,
                fontFamily: "cursive",
                marginTop: "7px",
                marginLeft: "89px",
              }}>Sign up to access your dashboard</Typography>
                  
                    <Box className={classes.tf} >
                  
                   <Select value={user.vendortype} name="vendortype" onChange={handleInputs} displayEmpty required >
                       
                       <MenuItem value=""  disabled style={{color:"grey"}}>Select Vendor Type</MenuItem>
                       <MenuItem value={"Venues"}>Venues</MenuItem>
                       <MenuItem value={"Photographers"}>Photographers</MenuItem>
                       <MenuItem value={"Food"}>Food</MenuItem>
                       <MenuItem value={"Decorators"}>Decorators</MenuItem>
                       <MenuItem value={"DJ"}>DJ</MenuItem>
                       <MenuItem value={"Clothing"}>Clothing</MenuItem>
                       <MenuItem value={"Mehndi"}>Mehndi</MenuItem>
                       <MenuItem value={"Jewellary"}>Jewellary</MenuItem>
                       <MenuItem value={"Weddings(pacakages)"}>Weddings(pacakages)</MenuItem>
                       <MenuItem value={"Birthdays(pacakages)"}>Birthdays(pacakages)</MenuItem>


                   </Select>
                        <TextField name="name"
                                    type="text"
                                    label="Enter Your Name"
                                    value={user.name}
                                    onChange={handleInputs}

                                    required>

                        </TextField>
                        <TextField  name="email"
                                    type="email"
                                    value={user.email}
                                    onChange={handleInputs}
                                    label="Enter Your Email"
                                    required>

                        </TextField>

                        <TextField  name="brandname"
                                    type="text"
                                    value={user.brandname}
                                    onChange={handleInputs}
                                    label="Enter Brand Name"
                                    required>

                        </TextField>
                        <TextField  name="des"
                                    type="text"
                                    value={user.des}
                                    onChange={handleInputs}
                                    label="Enter description of brand"
                                    required>

                        </TextField>
                        <TextField  name="price"
                                    type="number"
                                    value={user.price}
                                    onChange={handleInputs}
                                    label="Enter per day/person price"
                                    required>

                        </TextField>
                        <TextField  name="address"
                                    type="text"
                                    value={user.address}
                                    onChange={handleInputs}
                                    label="Enter Address"
                                    required>

                        </TextField>

                        <TextField  name="city"
                                    type="text"
                                    value={user.city}
                                    onChange={handleInputs}
                                    label="Enter Your City"
                                    required>

                        </TextField>
                        {/* <InputLabel>Vendor Type</InputLabel> */}
                       

                        <TextField  name="number"
                                    type="tel"
                                    value={user.number}
                                    onChange={handleInputs}

                                    label="Enter Your Contact Number"
                                    required>

                        </TextField>

                        <TextField  name="password"
                                    type="password"
                                    value={user.password}
                                    onChange={handleInputs}

                                    label="Create A Password"
                                    required>

                        </TextField>

                                        
                        <Button
                  style={{
                    marginTop: "26px",
                    padding: "13px",
                    backgroundColor: "rgb(93 154 213)",
                    color: "white",
                    width:"320px"
                  }}

                  onClick={PostData}
                >
                  Register
                </Button>
                       
                    </Box>
                </Box>

            </Box>
        </Box>
        
        </>
    );
}

export default BusinessRegister;



