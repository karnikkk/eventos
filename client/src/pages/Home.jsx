import React from "react";

//import components

import  Slider  from "../components/Slider";
import  Categories  from "../components/Categories";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar";
//import Products from "../components/Products"

const Home = () => {
  return (
    <>
      <Navbar/>
      <Slider />
      <Categories/>
      <Newsletter/>
      {/* <Products/> */}
      <Footer/>
    </>
  )
}

export default Home;
