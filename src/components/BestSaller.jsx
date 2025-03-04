import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import ProductsCard from './ProductsCard';
import SectionTitle from './SectionTitle';

const BestSaller = () => {

        const products = useContext(ShopContext);

        const [bestSaller, SetBestSaller] = useState([]);

        useEffect(() => {
            
            const bestSaller = products?.ShopProducts?.filter((items) => (items.bestseller));

            SetBestSaller(bestSaller.slice(0,4));

        }, [])
        

  return (
    <div className='section-padding best-saller'>
      <div className="container">
        <div className="text-center">
          <SectionTitle SectionTitle1={'Best'} SectionTitle2={'Saller'} />
        </div>

        <div className="bestsallerProducts-list">
          {bestSaller?.map((items, index) => {
            return <ProductsCard key={index} id={items._id} Image={items.image} ProductName={items.name} Price={items.price} />
          })}
        </div>
      </div>
    </div>
  )
}

export default BestSaller