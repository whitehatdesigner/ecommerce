import React from 'react'
import { assets } from '../assets/Images/import-images'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="main-footer">
          <div className="box">
            <img src={assets.logo} alt="logo" className='footer-logo' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam deserunt animi culpa enim beatae ducimus aut quisquam similique, voluptatibus impedit nobis dolores</p>
          </div>
          <div className="box">
            <h4>Quick Link</h4>

            <ul>
              <li><a href="javascript:void(0)">Home</a></li>
              <li><a href="javascript:void(0)">About Us</a></li>
              <li><a href="javascript:void(0)">Delivery</a></li>
              <li><a href="javascript:void(0)">Privacy policy</a></li>
            </ul>
          </div>

          <div className="box">
            <h4>GET IN TOUCH</h4>
            <ul>
              <li><a href="javascript:void(0)">+1-000-000-0000</a></li>
              <li><a href="javascript:void(0)">greatstackdev@gmail.com </a></li>
              <li><a href="javascript:void(0)">greatstackdev@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="bottom-footer text-center py-2">
          <p>Copyright 2025 Ankit Shukla - All Right Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer