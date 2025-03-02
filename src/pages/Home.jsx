import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
const Home = () => {
  const location = useLocation();
  return (
    <div>
            <Header/>
            {location.pathname === "/" ? <Mainpage/> : <Outlet/> }
            <Footer/>
    </div>
  )
}


const Mainpage = () => {
  return (
    <>
    <HeroSection/>
    </>
  )
}
export default Home

