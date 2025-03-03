import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import LatestCollection from '../components/LatestCollection';
import ShopContextProvider from '../context/shopContext';

const Home = () => {
  const location = useLocation();
  return (
    <div>
      <ShopContextProvider>
          <Header />
          {location.pathname === "/" ? <Mainpage /> : <Outlet />}
          <Footer />
      </ShopContextProvider>
    </div>
  )
}


const Mainpage = () => {
  return (
    <>
      <HeroSection />
      <LatestCollection />
    </>
  )
}
export default Home

