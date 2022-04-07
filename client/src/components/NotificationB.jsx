import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { display } from "@mui/system";
import { useState } from "react";

const useStyle=makeStyles({
    linearBox:{
        backgroundColor:"black",
        width:"100%",
        color:"white",
        height:"100px"

    }
})

function loadscript(src){
    return new Promise(resolve=>{ const script=document.createElement('script')
    script.src=src
   
    script.onload=()=>{
        resolve(true)
    }
    script.onerror=()=>{
        resolve(false)
    }
    document.body.appendChild(script)
})    
}

const NotificationB=()=>{
    const [name, setName] = useState('')
   async function displayRazorPay(){

        const res=await loadscript("https://checkout.razorpay.com/v1/checkout.js")
        if(!res){
            alert("Failed to load, check your connection")
            return
        }

        const data=await fetch("http://localhost:3000/razorpay",{method:'POST'}).then((t)=>
                t.json()
        )

        console.log(data)
        const options = {
			key:  'rzp_test_uWDGTM5pTvBKPH' ,
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Eventos',
			description: 'Thank you !',
			image: 'https://cdn.razorpay.com/logos/F9Yhfb7ZXjXmIQ_medium.png',
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			prefill: {
				name,
				email: '',
				phone_number: '9899999999'
			},
            notes: {
                         "address": "Razorpay Corporate Office"
                     },
            theme: {
                         "color": "#3399cc"
                     }
		}
       
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }


   
    const classes=useStyle();

    return(
        <>
        <Box className={classes.linearBox}>
            <Typography>Name accepted your order request.</Typography>
            <Typography>Amount:0000 Rs</Typography>

            <Button style={{backgroundColor:"green",color:"white"}} onClick={displayRazorPay}>Pay</Button>

           
        </Box>
        
        
        
        </>
    )

}


export default NotificationB;