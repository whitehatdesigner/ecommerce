import React from 'react'
import { assets } from '../assets/Images/import-images'

const HeroSection = () => {
  return (
   <section className='hero-section'>
    <div className="container">
        <div className="main-hero-section">
            <div className="hero-content">
                <div className="hero-text">
                <span className='first-tagline'>Our Bestsellers</span>
                    <h1>Latest Arrivals</h1>
                    <span className='secound-tagline'>Shop Now</span>
                </div>
            </div>
            <div className="hero-images">
                <div className="itme">
                    <img src={assets.hero_img} alt="hero images" />
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default HeroSection