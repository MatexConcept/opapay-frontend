import React from 'react'
import Navbar from '../../components/navbar/Navbar'

// import './Home.scss'

import Hero from '../../components/hero/Hero'
import HeroSection from '../../components/HeroSection'
import ThirdSection from "../../components/ThirdSection";
import FourthSectin from '../../components/FourthSection'
// import Payment from "../../components/Payment";
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
   <div>
    <>
    <Navbar/>
      <Hero/>
      <HeroSection/>
      <ThirdSection/>
      <FourthSectin/>
      {/* <Payment/> */}
      <br/>
      <Footer />
    </>
   </div>
  )
}

export default Home