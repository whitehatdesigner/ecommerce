import React, { useContext } from 'react'
import SectionTitle from '../components/SectionTitle'
import CartValue from '../components/CartValue'
import { assets } from '../assets/Images/import-images'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const {navigate} = useContext(ShopContext);
  return (
    <div className='order-place section-padding'>
      <div className="container">
        <SectionTitle SectionTitle1={'Delivery'} SectionTitle2={'Information'} />

        <div className="main-order-place">
          <div className="form-box">
            <form>
              <div className="group-box">
                <div className="box">
                  <input type="text" placeholder='First Name' />
                </div>
                <div className="box">
                  <input type="text" placeholder='Last Name' />
                </div>
              </div>
              <div className="box">
                <input type="tel" placeholder='Enter Your Phone No.' />
              </div>
              <div className="box">
                <input type="email" placeholder='Enter Your email' />
              </div>
              <div className="box">
                <input type="text" placeholder='Street' />
              </div>

              <div className="group-box">
                <div className="box">
                  <input type="text" placeholder='City' />
                </div>
                <div className="box">
                  <input type="text" placeholder='State' />
                </div>
              </div>

              <div className="group-box">
                <div className="box">
                  <input type="number" placeholder='Zip Code' />
                </div>
                <div className="box">
                  <input type="text" placeholder='Country' />
                </div>
              </div>

            </form>
          </div>
          <div className="payment-details">
            <CartValue />

            <div className="payment-method">
              <h4>Payment </h4>

              <div className="multi-payments">
                <div className="box">
                  <label>
                    <input type="radio" name='payment' />
                    <img src={assets.stripe_logo} alt="" />
                  </label>
                </div>
                <div className="box">
                  <label>
                    <input type="radio" name='payment' />
                    <img src={assets.razorpay_logo} alt="" />
                  </label>
                </div>
                <div className="box">
                  <label>
                    <input type="radio" name='payment' />
                    <img src={assets.stripe_logo} alt="" />
                  </label>
                </div>
              </div>
            </div>
            <button className='primary-btn' onClick={()=> navigate('/orders')}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder