import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext';

const LatestCollection = () => {

    const  products  = useContext(ShopContext);

    console.log("hii",products);
  return (          
    <div>
        
    </div>
  )
}

export default LatestCollection