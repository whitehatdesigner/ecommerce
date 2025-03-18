import React, { useContext } from 'react'
import { assets } from '../assets/Images/import-images'
import SectionTitle from './SectionTitle'
import { ShopContext } from '../context/ShopContext'

const AboutUs = () => {

    const {navigate} = useContext(ShopContext);
  return (
    <div className='about-page'>
    <div className="container">
      <SectionTitle SectionTitle1={'About'} SectionTitle2={'Us'}/>
      <div className="main-about">
        <div className="about-img">
          <img src={assets.about_img} alt="img" />
        </div>
        <div className="about-content">
            <h3>Lorem ipsum dolor sit</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque voluptates id itaque placeat repellat quo similique vitae architecto quos exercitationem rerum error cumque consectetur, fugiat veniam omnis quisquam? Ducimus necessitatibus asperiores sed ea delectus ratione modi, nisi ab laboriosam possimus provident inventore iste nemo voluptate unde a quod totam quas quis quibusdam id odit, tempore, vel consequuntur. Cum tempora animi saepe minus deserunt accusamus dolor. Aspernatur, sapiente atque magnam quia ullam excepturi quae obcaecati sequi itaque neque voluptatum ratione. Dicta atque numquam commodi nobis fugit saepe perspiciatis labore beatae possimus, eligendi animi eos expedita omnis temporibus? Perspiciatis, maiores commodi?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae molestias necessitatibus ipsam voluptate, veniam atque perspiciatis dolorem officia pariatur. Commodi quia amet vero ipsam repudiandae cum ratione beatae consequatur necessitatibus.</p>

            <button onClick={ () => navigate('/contact-us')} className='primary-btn'>Contact Us</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutUs