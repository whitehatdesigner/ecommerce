import React from 'react'
import { assets } from '../assets/Images/import-images'

const OurPolicy = () => {
  return (
    <div className='our-policy'>
        <div className="container">
            <div className="main-our-policy">
                <div className="box">
                    <div className="box-img">
                        <img src={assets.exchange_icon} alt="icon" />
                    </div>
                    <div className="box-content">
                        <h4>Easy Exchange Policy</h4>
                        <p>We offer hassle free exchange policy</p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-img">
                        <img src={assets.quality_icon} alt="icon" />
                    </div>
                    <div className="box-content">
                        <h4>Easy Exchange Policy</h4>
                        <p>We offer hassle free exchange policy</p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-img">
                        <img src={assets.support_img} alt="icon" />
                    </div>
                    <div className="box-content">
                        <h4>Easy Exchange Policy</h4>
                        <p>We offer hassle free exchange policy</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurPolicy