import React, { useEffect,useState } from 'react'
import { Button, Dialog, DialogContent ,makeStyles, TextField, Typography} from "@material-ui/core";
import { DialogTitle } from "@mui/material";
import { useAlert } from 'react-alert';
import {  useHistory} from "react-router-dom";

const useStyle=makeStyles({
comp:{
    height:"550px",
    width:"550px",
    //alignItems:"center",
    display:'flex',
    flexDirection:"column",
    //border:"2px solid black"
},

});

const InfoDialog=({open,setOpen,profilename})=>{
    const classes=useStyle();
    const history =useHistory();

    console.log(profilename)
    const [name,setName] = useState('')
    const [contact,setContact] = useState('')
    const [address,setAddress] = useState('')
    const [days,setDays] = useState('')
    const [sdate,setSdate] = useState('')
    const [edate,setEdate] = useState('')

    const alert = useAlert();

    const submit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/b1/booking", {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
        
            body: JSON.stringify({
                name,
                contact,
                address,
                days,
                sdate,
                edate,
                profilename
               })
        });

        const data = res.json();
        console.log(data)
  
        if (res.status === 200){
            alert.success('response is submitted successfully')
          

        }else{
            alert.error("Please fill all the required blanks")
      
        }

            

    }

    const handleClose=()=>{
        setOpen(false);
    }
    return(
    
        <Dialog  
        open={open} onClose={handleClose}>
            
            <DialogContent className={classes.comp}>
                <Typography style={{fontSize:"18px"}}>Please Fill This Information</Typography>

                <TextField name="name" required label="Enter Your Name" style={{marginTop:"20px"}} value={name} onChange={(e) => setName(e.target.value)} ></TextField>
                <TextField name="contact" required label="Enter Your Contact No." style={{marginTop:"16px"}} value={contact} onChange={(e) => setContact(e.target.value)} ></TextField>
                <TextField name="address" required label="Enter Your Event Address" style={{marginTop:"16px"}} value={address} onChange={(e) => setAddress(e.target.value)} ></TextField>
                <TextField name="days" required label="Enter No. Of Days" style={{marginTop:"16px"}} value={days} onChange={(e) => setDays(e.target.value)} ></TextField> 
                <Typography style={{marginTop:"16px",marginRight:"40px"}}>Enter Dates Of Event</Typography>
                <Typography style={{marginTop:"10px",fontSize:"12px",marginRight:"135px"}}>From</Typography>
                <TextField name="sdate" required type="date"style={{marginTop:"10px"}} value={sdate} onChange={(e) => setSdate(e.target.value)}  ></TextField>
                <Typography style={{marginTop:"10px",fontSize:"12px",marginRight:"135px"}}>To</Typography>
                <TextField name="edate" required type="date" style={{marginTop:"10px"}} value={edate} onChange={(e) => setEdate(e.target.value)} ></TextField>
                <Button style={{marginTop:"20px",backgroundColor:"black",color:"white",}}  onClick={submit}  >SUBMIT</Button>

            </DialogContent>
            
        </Dialog>
         
    )
}

export default InfoDialog;