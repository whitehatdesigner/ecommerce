import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import SectionTitle from '../components/SectionTitle';

const Orders = () => {

  const { products, currency } = useContext(ShopContext);

  return (
    <div className='my-orders'>
      <div className="container">
        <SectionTitle SectionTitle1={'My'} SectionTitle2={'Orders'} />
        <div className="main-my-order">
          {
            products.slice(1, 4).map((items, index) => (
              <div className="items" key={index}>
                <div className="product-details">
                  <img src={items.image[0]} alt="img" />
                  <div className="details">
                  <p><b>{items.name}</b></p>
                  <p className='flex gap-5'>
                    <span><b>{currency}{items.price}</b></span>
                    <span>Quantity: 1</span>
                    <span>Size: M</span>
                  </p>
                  <p><b>Date: </b> 25, Mar, 2025</p>
                  </div>
        
                </div>
                <p>Ready to Ship</p>
                <button className='border py-2 px-3'>Track Order</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Orders