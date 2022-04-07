import React from 'react'
import { makeStyles, Box, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
//import component
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const useStyle = makeStyles({
    Title: {
        fontSize: "28px",
        marginTop: "41px",
        marginLeft: "210px",
        textDecoration: 'underline',
        fontFamily: 'Abel'


    },
    mainbox: {
        marginTop: '45px'
    },

    linearbox: {

        width: "1200px",
        height: '120px',
        marginLeft: '208px',
        display: 'flex',
        marginBottom: '10px'

    },
    bx1: {
        backgroundColor: '#cac4c4',
        width: '590px',
        display: 'flex',
        cursor: 'pointer'
    },
    bx2: {
        backgroundColor: '#63999538',
        width: '590px',
        marginLeft: '20px',
        display: 'flex',
        cursor: 'pointer'
    },
    bx3: {
        backgroundColor: '#e7aa5938',
        width: '590px',
        display: 'flex',
        cursor: 'pointer'
    },
    bx4: {
        backgroundColor: '#e98eb438',
        width: '590px',
        marginLeft: '20px',
        display: 'flex',
        cursor: 'pointer'
    },

    bx5: {
        backgroundColor: '#4853857b',
        width: '590px',
        display: 'flex',
        cursor: 'pointer'
    },
    bx6: {
        backgroundColor: '#37703760',
        width: '590px',
        marginLeft: '20px',
        display: 'flex',
        cursor: 'pointer'
    },
    bx7: {
        backgroundColor: '#fcb72f38',
        width: '590px',
        display: 'flex',
        cursor: 'pointer'
    },
    bx8: {
        backgroundColor: '#f0923b7c',
        width: '590px',
        marginLeft: '20px',
        display: 'flex',
        cursor: 'pointer'
    },
    left: {
        width: '230px',

    }
});




const Services = () => {

    const classes = useStyle();
    return (
        <>
            <Navbar />
            <Box className={classes.Title}>
                Categories
            </Box>
            <Box className={classes.mainbox}>
                <Box className={classes.linearbox} >
                    <Link to={`./Vendors/all/Photographers`} style={{ textDecoration: 'none', color: 'black' }}>

                        <Box className={classes.bx1}>
                            <Box className={classes.left}>
                                <Typography style={{ marginLeft: '15px', fontSize: '24px', marginTop: '20px', fontFamily: 'Abel', fontWeight: '700' }}>Photographers</Typography>
                                <Typography style={{ marginLeft: '15px', fontSize: '16px', marginTop: '10px', width: '175px', fontFamily: 'Abel' }}>
                                    Photography,Prewedding etc.
                                </Typography>

                            </Box>

                            <img src="https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?cs=srgb&dl=pexels-alex-andrews-1203803.jpg&fm=jpg" style={{ height: '120px', width: '222px', marginLeft: '138px', borderTopLeftRadius: '56px', }} />

                        </Box>
                    </Link>
                    <Link to={`./Vendors/all/Venues`} style={{ textDecoration: 'none', color: 'black' }}>
                        <Box className={classes.bx2}>
                            <Box className={classes.left}>
                                <Typography style={{ marginLeft: '15px', fontSize: '24px', marginTop: '20px', fontFamily: 'Abel', fontWeight: '700' }}>Venues</Typography>
                                <Typography style={{ marginLeft: '15px', fontSize: '16px', marginTop: '10px', width: '175px', fontFamily: 'Abel' }}>
                                    Banquet Halls,Lawns etc.
                                </Typography>

                            </Box>
                            <img src="https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?cs=srgb&dl=pexels-edward-eyer-1045541.jpg&fm=jpg" style={{ height: '120px', width: '222px', marginLeft: '138px', borderTopLeftRadius: '56px', }} />
                        </Box>

                    </Link>
                </Box>
                <Box className={classes.linearbox} >
                    <Link to={`./Vendors/all/Food & Caterers`} style={{ textDecoration: 'none', color: 'black' }}>
                        <Box className={classes.bx3}>
                            <Box className={classes.left}>
                                <Typography style={{ marginLeft: '15px', fontSize: '24px', marginTop: '20px', fontFamily: 'Abel', fontWeight: '700' }}>Food & Caterers</Typography>
                                <Typography style={{ marginLeft: '15px', fontSize: '16px', marginTop: '10px', width: '175px', fontFamily: 'Abel' }}>
                                    Chat , Catering etc.
                                </Typography>

                            </Box>
                            <img src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?cs=srgb&dl=pexels-fu-zhichao-587741.jpg&fm=jpg" style={{ height: '120px', width: '222px', marginLeft: '138px', borderTopLeftRadius: '56px', }} />
                        </Box>
                    </Link>
                    <Link to={`./Vendors/all/Decorators`} style={{ textDecoration: 'none', color: 'black' }}>
                        <Box className={classes.bx4}><Box className={classes.left}>
                            <Typography style={{ marginLeft: '15px', fontSize: '24px', marginTop: '20px', fontFamily: 'Abel', fontWeight: '700' }}>Decorators</Typography>
                            <Typography style={{ marginLeft: '15px', fontSize: '16px', marginTop: '10px', width: '175px', fontFamily: 'Abel' }}>
                                Wedding,Birthday etc.
                            </Typography>

                        </Box>
                            <img src="https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?cs=srgb&dl=pexels-joel-paim-2291462.jpg&fm=jpg" style={{ height: '120px', width: '222px', marginLeft: '138px', borderTopLeftRadius: '56px', }} /></Box>

                    </Link>
                </Box>
            </Box>

            <Box className={classes.linearbox} >
                <Link to={`./Vendors/all/DJ's & Music`} style={{ textDecoration: 'none', color: 'black' }}>
                    <Box className={classes.bx5}>
                        <Box className={classes.left}>
                            <Typography style={{ marginLeft: '15px', fontSize: '24px', marginTop: '20px', fontFamily: 'Abel', fontWeight: '700' }}>DJ's & Music</Typography>
                            <Typography style={{ marginLeft: '15px', fontSize: '16px', marginTop: '10px', width: '175px', fontFamily: 'Abel' }}>
                                Sangeet Choreographer,Dj.
                            </Typography>

                        </Box>
                        <img src="https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?cs=srgb&dl=pexels-mikky-k-625644.jpg&fm=jpg" style={{ height: '120px', width: '222px', marginLeft: '138px', borderTopLeftRadius: '56px', }} />
                    </Box>
                </Link>
                <Link to={`./Vendors/all/Clothing`} style={{ textDecoration: 'none', color: 'black' }}>
                    <Box className={classes.bx6}><Box className={classes.left}>
                        <Typography style={{ marginLeft: '15px', fontSize: '24px', marginTop: '20px', fontFamily: 'Abel', fontWeight: '700' }}>Clothings</Typography>
                        <Typography style={{ marginLeft: '15px', fontSize: '16px', marginTop: '10px', width: '175px', fontFamily: 'Abel' }}>
                            Groom Wear,Bridal Wear etc.
                        </Typography>

                    </Box>
                        <img src="https://images.pexels.com/photos/4042486/pexels-photo-4042486.jpeg?cs=srgb&dl=pexels-krishna-studio-4042486.jpg&fm=jpg" style={{ height: '120px', width: '222px', marginLeft: '138px', borderTopLeftRadius: '56px', }} />
                    </Box>
                </Link>
            </Box>

            <Box className={classes.linearbox} >
                <Link to={`./Vendors/all/Mehndi`} style={{ textDecoration: 'none', color: 'black' }}>
                    <Box className={classes.bx7}>
                        <Box className={classes.left}>
                            <Typography style={{ marginLeft: '15px', fontSize: '24px', marginTop: '20px', fontFamily: 'Abel', fontWeight: '700' }}>Mehndi</Typography>
                            <Typography style={{ marginLeft: '15px', fontSize: '16px', marginTop: '10px', width: '175px', fontFamily: 'Abel' }}>
                                Mehndi Artist.
                            </Typography>

                        </Box>
                        <img src="https://images.pexels.com/photos/10915757/pexels-photo-10915757.jpeg?cs=srgb&dl=pexels-alberta-studios-10915757.jpg&fm=jpg" style={{ height: '120px', width: '222px', marginLeft: '138px', borderTopLeftRadius: '56px', }} />
                    </Box>
                </Link>
                <Link to={`./Vendors/all/Jewellery`} style={{ textDecoration: 'none', color: 'black' }}>
                    <Box className={classes.bx8}>
                        <Box className={classes.left}>
                            <Typography style={{ marginLeft: '15px', fontSize: '24px', marginTop: '20px', fontFamily: 'Abel', fontWeight: '700' }}>Jewellery</Typography>
                            <Typography style={{ marginLeft: '15px', fontSize: '16px', marginTop: '10px', width: '175px', fontFamily: 'Abel' }}>
                                Jewellery and Accessories.
                            </Typography>

                        </Box>
                        <img src="https://images.pexels.com/photos/1444441/pexels-photo-1444441.jpeg?cs=srgb&dl=pexels-viresh-studio-1444441.jpg&fm=jpg" style={{ height: '120px', width: '222px', marginLeft: '138px', borderTopLeftRadius: '56px', }} /></Box>
                </Link>
            </Box>

            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>


            <Footer />


        </>

    );
}

export default Services
