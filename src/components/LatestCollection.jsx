import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import SectionTitle from './SectionTitle';
import ProductsCard from './ProductsCard';

const LatestCollection = () => {

  const products = useContext(ShopContext);

  const [latestProducts, SetLatestProducts] = useState([]);

  useEffect(() => {

    SetLatestProducts(products?.ShopProducts?.slice(0, 10));
  }, [])




  return (
    <div className='latest-section section-padding'>

      <div className="container">
        <div className="text-center">
          <SectionTitle SectionTitle1={'Latest'} SectionTitle2={'Collection'} />
        </div>

        <div className="latestProducts-list">
          {latestProducts?.map((items, index) => {
            return <ProductsCard key={index} id={items._id} Image={items.image} ProductName={items.name} Price={items.price} />
          })}
        </div>
      </div>


    </div>
  )
}

export default LatestCollection