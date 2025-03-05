import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/Images/import-images';
import SectionTitle from '../components/SectionTitle';
import { ShopContext } from '../context/shopContext';
import ProductsCard from '../components/ProductsCard';

const Collection = () => {

  const products = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  const [category, setCategories] = useState([]);

  const [subCategories, setSubCategories] = useState([]);


  const toggleCategories = (e) => {
    if (category.includes(e.target.value)) {
        setCategories(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategories(prev => [...prev,e.target.value])
    }
  }


  const toggleSubCategories = (e) => {
    
    if (subCategories.includes(e.target.value)) {
      setSubCategories(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategories(prev => [...prev,e.target.value])
    }
  }


  const applyFilter = () => {

    let productCopy = products?.ShopProducts?.slice();

    if(category.length > 0){
      productCopy = productCopy?.ShopProducts?.filter(item => category.includes(item.category));
    }

    setFilterProducts(productCopy);
  }

  useEffect(() => {
    applyFilter()
  },[subCategories, category])

 
  useEffect(() => {
    setFilterProducts(products?.ShopProducts)
  }, [])

  return (
    <main className='collection-page section-padding'>
      <div className="container">
        <div className="collection-warapp">

          <div className="filter-bar">
            <div className="filter-bar-style">
              <h4 onClick={() => setShowFilter(!showFilter)}>Filter <img src={assets.dropdown_icon} alt="icon" className='filter-icon' /></h4>

              <div className={`filter-box ${showFilter ? '' : 'filter-hide'}`}>
                <p>Categories</p>
                <ul>
                  <li><input type="checkbox" value={'Men'} onChange={toggleCategories} /> Men</li>
                  <li><input type="checkbox" value={'Women'} onChange={toggleCategories} /> Women</li>
                  <li><input type="checkbox" value={'Kid'} onChange={toggleCategories} /> kid</li>
                </ul>
              </div>

              <div className={`filter-box ${showFilter ? '' : 'filter-hide'}`}>
                <p>Sub Categories</p>
                <ul>
                  <li><input type="checkbox" value={'Topwear'} onChange={toggleSubCategories} /> Topwear</li>
                  <li><input type="checkbox" value={'Bottomwear'} onChange={toggleSubCategories} /> Bottomwear</li>
                  <li><input type="checkbox" value={'Winterwear'} onChange={toggleSubCategories} /> Winterwear</li>
                </ul>
              </div>
            </div>

          </div>

          <div className="collection-side-bar">
            <div className="collection-heading">
              <SectionTitle SectionTitle1={'All'} SectionTitle2={'Collection'} />

              {/* product short */}

              <div className="product-short">
                <select>
                  <option value="relevent">Short by: Relevent</option>
                  <option value="low-high">Short by: Low to High </option>
                  <option value="high-low">Short by: High to Low</option>
                </select>
              </div>
            </div>

            <div className="collection-products">
              {filterProducts?.map((items, index) => {
                return <ProductsCard key={index} id={items._id} Image={items.image} ProductName={items.name} Price={items.price} />
              })}
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default Collection