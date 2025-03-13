import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import SectionTitle from '../components/SectionTitle';

const Cart = () => {

  const {products, currency, cartItems} = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(()=>{

    const tempData = [];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item] > 0){
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData);
    
  },[cartItems])

  return (
    <div className='cart-page section-padding'>
      <div className="container">
        <SectionTitle SectionTitle1={'Our'} SectionTitle2={'Cart'}/>
        <div className="main-cart-page">
            {
              // console.log('hi..',cartData)
              
              cartData?.map((item,index) => {
                const productData = products?.find((product) => product._id === item._id);

                // console.log(productData);
                
                return (
                  <div className='items' key={index}>
                    <div className="item-img">
                      <img src={productData.image[0]} alt="img" />
                    </div>
                    <div className="item-name">
                      <h4>{productData.name}</h4>
                    </div>
                  </div>
                )
              })
            }
        </div>
      </div>
    </div>
  )
}

export default Cart