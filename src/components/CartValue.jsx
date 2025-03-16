import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartValue = () => {
    const {currency,deliveryFee,getCartAmount} = useContext(ShopContext);


  return (
    <div className='cart-total'>
      <h4>Cart Total</h4>
      <p><b>Subtotal</b> <span>{currency}{getCartAmount()}.00</span></p>
      <p><b>Shipping Fee</b> <span>{currency}{deliveryFee}.00 </span></p>
      <p><b>Total</b> <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + deliveryFee}.00</b></p>
    </div>
  )
}

export default CartValue