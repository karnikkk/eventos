import React, { useState } from "react";
import {
  makeStyles,
  Box,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import by from "./login/by.png";
import { Link, useHistory } from "react-router-dom";

//css
const useStyle = makeStyles({
  component: {
    height: "70vh",
    width: "590px",
  },
  image: {   
    background: "#90abcc",
    height: "74vh",
    width: "31%",
  },
  txt: {
    color: "white",
    fontWeight: 500,
    fontFamily: "cursive",
    marginLeft: "63px",
  },
});


const Register = () => {
  const history = useHistory();

  //react usestate hooks store data in database

  const [user, setUser] = useState({
    username: "", email: "", password: "", cpassword: ""
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value })
  }


  const PostData = async (e) => {
    e.preventDefault();

    const { username, email, password, cpassword } = user;

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },

      body: JSON.stringify({
        username, email, password, cpassword

      })
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid registration");
      console.log("Invalid registration");
    } else {
      window.alert("successfull Registration");
      console.log("successfull registration");

      history.push("/login");
    }
  }


  const classes = useStyle();

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignTtems: "center",
        marginTop: "90px",
      }}
    >
      <Box className={classes.image}>
        <img
          src={by}
          style={{
            height: "200px",
            width: "200px",
            padding: "20px",
            marginTop: "100px",
            marginLeft: "109px",
          }}
        ></img>
        <div
          style={{
            fontSize: "30px",
            color: "white",
            fontWeight: 610,
            marginLeft: "155px",
            marginTop: "-5px",
            fontFamily: "cursive",
          }}
        >
          EVENTOS
        </div>
        <div style={{ marginTop: "20px", marginLeft: "45px" }}>
          <div className={classes.txt}>Welcome to the Eventos user area</div>
          {/* <div className={classes.txt}>.</div> */}
        </div>
      </Box>

      <Box style={{ border: "8px solid #90abcc" }}>
        <Typography
          style={{
            fontSize: "30px",
            color: "#90abcc",
            fontWeight: 550,
            fontFamily: "cursive",
            marginTop: "27px",
            marginLeft: "22px",
            marginRight: "10px"
          }}
        >
          New At EVENTOS?
        </Typography>
        <Typography
          style={{
            fontSize: "18px",
            color: "#90abcc",
            fontWeight: 561,
            fontFamily: "cursive",
            marginTop: "30px",
            marginLeft: "110px",
          }}
        >
          Sign Up Now!
        </Typography>
        <Box
          style={{
            padding: "25px 35px",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            "& > *": {
              marginTop: 20,
            },
          }}
        >
          <TextField value={user.username} onChange={handleInputs}
            name="username"
            type="text"
            label="Enter Your User Name"
          ></TextField>

          <TextField value={user.email} onChange={handleInputs}
            name="email"
            type="email"
            label="Enter Your Email"
          ></TextField>

          <TextField value={user.password} onChange={handleInputs}
            name="password"
            type="password"
            label="Enter Your Password"
          ></TextField>

          <TextField value={user.cpassword} onChange={handleInputs}
            name="cpassword"
            type="password"
            label="Confirm Your Password"
          ></TextField>


          <Button onClick={PostData}
            style={{
              marginTop: "20px",
              padding: "13px",
              backgroundColor: "#90abcc",
              color: "white",
            }}
          >
            Sign Up
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
            <Typography> Already A Member? </Typography>
            <a
              style={{
                fontWeight: 600,
                color: "rgb(143 138 138)",
                //textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              <Link to="./Login" style={{ textDecoration: "none" }}>Login Now</Link>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Register;
