import React,{useState} from "react";
import { Box, makeStyles, Typography ,TextField,Button} from "@material-ui/core";
import lp from "./login/lp.png";
import { Link,useHistory } from "react-router-dom";
import { useAlert } from 'react-alert';
//import { use } from "../../../server/routes/auth";

const useStyle = makeStyles({
  mainBox: {
    //backgroundColor:"red",
    alignItems: "center",
    justifyContent: "center",
  },
  innerBox: {
    display: "flex",
    //backgroundColor:"red",
    //alignItems:"center",
    //justifyContent:"center",
    border: "9px solid #9aee9f",
    width: "50%",
    height: "71vh",
    marginTop: "80px",
    marginLeft: "370px",
  },
  left: {
    backgroundColor: "#9aee9f",
    width: "50%",
  },
  right: {
    alignItems: "center",
    justifyContent: "center",
  },
});

const BusinessLogin = () => {

    const history=useHistory();
    const alert =  useAlert()

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    async function loginUser(e){
      e.preventDefault();
     
      const resp=await fetch('http://localhost:5000/api/p1/businessLogin',{
        method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
             email,password
            })
  
      })
  
      const data = resp.json();

      if (resp.status === 400 || !data){
        alert.error("Invalid credintial")
      }else{
        //window.alert("Log In successfully!")
        alert.success('logged In successfully.')
     
        history.push("/BusinessDash");
      }
    } 
    

  const classes = useStyle();
  return (
    <>
      <Box className={classes.mainBox}>
        <Box className={classes.innerBox}>
          <Box className={classes.left}>
            <img
              src={lp}
              style={{
                height: "210px",
                width: "210px",
                padding: "20px",
                marginTop: "100px",
                marginLeft: "54px",
              }}
            />
            <Typography
              style={{
                fontSize: "30px",
                color: "black",
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
                color: "black",
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
            <Typography
              style={{
                fontSize: "30px",
                //color:"black",
                color: "rgb(58 179 65)",
                fontWeight: 550,
                fontFamily: "cursive",
                marginTop: "27px",
                marginLeft: "165px",
              }}
            >
              Login
            </Typography>
            <Typography
              style={{
                fontSize: "18px",
                color: "rgb(58 179 65)",
                //   color:"black",
                fontWeight: 561,
                fontFamily: "cursive",
                marginTop: "30px",
                marginLeft: "65px",
              }}
            >
              Welcome To Eventos Business!
            </Typography>
            <Box
              style={{
                padding: "25px 52px",
                display: "flex",
                flex: 1,
                flexDirection: "column",
                "& > *": {
                  marginTop: 20,
                },
              }}
            >
              <TextField
                name="email"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                label="Enter Your Email"
                required
              ></TextField>

              <TextField
                name="password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                label="Enter Your Password"
                required
              ></TextField>
             <Link to={'./ForgotPass'}>
              <Typography
                style={{
                  fontSize: "11px",
                  marginTop: "13px",
                  cursor: "pointer",
                  marginLeft: "184px",
                }}
              >
                Forgot Password?
              </Typography></Link>
              <Button
                style={{
                  marginTop: "20px",
                  padding: "13px",
                  backgroundColor: "rgb(135 216 140",
                  color: "white",
                }}

                onClick={loginUser}
              >
                Login
              </Button>
              <Typography
                style={{
                  marginTop: "25px",
                  marginLeft: "92px",
                  color: "rgb(143 138 138)",
                  fontSize: "13px",
                }}
              >
                ------Or------
              </Typography>
              <Box
                style={{
                  display: "flex",
                  marginTop: "26px",
                  marginLeft: "17px",
                  color: "rgb(143 138 138)",
                }}
              >
                <Typography> New At Eventos? </Typography>
               
                  <Link to={"./BusinessRegister"}>
                    <a style={{cursor:"pointer",color:"blue"}}>Register Yourself</a>
                  </Link>
                

              </Box>
              
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BusinessLogin;
