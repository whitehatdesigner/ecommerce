import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/Images/import-images';
import SectionTitle from '../components/SectionTitle';
import { ShopContext } from '../context/ShopContext';
import ProductsCard from '../components/ProductsCard';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [shortProduct, setShortProduct] = useState('relevent' || [])

  console.log(search);
  
  const toggleCategories = (e) => {
    if (category.includes(e.target.value)) {
      setCategories((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategories((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategories = (e) => {
    if (subCategories.includes(e.target.value)) {
      setSubCategories((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategories((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice() || [];

    if(showSearch && search){
      productCopy = productCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    }


    if (category.length > 0) {
      productCopy = productCopy.filter((item) => category.includes(item.category));
    }

    if (subCategories.length > 0) {
      productCopy = productCopy.filter((item) => subCategories.includes(item.subCategory));
    }

    setFilterProducts(productCopy);
  };

    const shortProducts = () => {
      let spCopy = filterProducts.slice() || [];

      switch (shortProduct) {
        case 'low-high':
          setFilterProducts(spCopy.sort((a, b)=>(a.price - b.price)));
          break;
      
          case 'high-low':
            setFilterProducts(spCopy.sort((a, b)=>(b.price - a.price)));
            break;
        default:
          applyFilter();
          break;
      }
    }

  useEffect(() => {
    applyFilter();
  }, [subCategories, category, products, search, showSearch]);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    shortProducts();
  }, [shortProduct])


  return (
    <main className="collection-page section-padding">
      <div className="container">
        <div className="collection-warapp">
          <div className="filter-bar">
            <div className="filter-bar-style">
              <h4 onClick={() => setShowFilter(!showFilter)}>
                Filter <img src={assets.dropdown_icon} alt="icon" className="filter-icon" />
              </h4>

              <div className={`filter-box ${showFilter ? '' : 'filter-hide'}`}>
                <p>Categories</p>
                <ul>
                  <li>
                    <input type="checkbox" value={'Men'} onChange={toggleCategories} /> Men
                  </li>
                  <li>
                    <input type="checkbox" value={'Women'} onChange={toggleCategories} /> Women
                  </li>
                  <li>
                    <input type="checkbox" value={'Kids'} onChange={toggleCategories} /> Kids
                  </li>
                </ul>
              </div>

              <div className={`filter-box ${showFilter ? '' : 'filter-hide'}`}>
                <p>Sub Categories</p>
                <ul>
                  <li>
                    <input type="checkbox" value={'Topwear'} onChange={toggleSubCategories} /> Topwear
                  </li>
                  <li>
                    <input type="checkbox" value={'Bottomwear'} onChange={toggleSubCategories} /> Bottomwear
                  </li>
                  <li>
                    <input type="checkbox" value={'Winterwear'} onChange={toggleSubCategories} /> Winterwear
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="collection-side-bar">
            <div className="collection-heading">
              <SectionTitle SectionTitle1={'All'} SectionTitle2={'Collection'} />

              <div className="product-short">
                <select onChange={(e)=> {setShortProduct(e.target.value)}}>
                  <option value="relevent">Short by: Relevent</option>
                  <option value="low-high">Short by: Low to High</option>
                  <option value="high-low">Short by: High to Low</option>
                </select>
              </div>
            </div>

            <div className="collection-products">
              {filterProducts?.map((items, index) => (
                <ProductsCard key={index} id={items._id} Image={items.image} ProductName={items.name} Price={items.price} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Collection;