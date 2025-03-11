import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import { assets } from '../assets/Images/import-images'
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect( ()=>{
        if (location.pathname.includes('collection')) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location])

    // console.log(search);
    
    return showSearch && visible ? (
        <div className='showSearch-section'>
            <div className="container">
                <div className="main-showSearch-section">
                    <div className="search-box">
                        <input type="text" placeholder='Search' value={search} onChange={(e)=> setSearch(e.target.value)} />
                        <img src={assets.search_icon} alt="icon" />
                    </div>
                    <span onClick={()=>setShowSearch(false)} className='close-icon'>
                        <img src={assets.cross_icon} alt="icon" />
                    </span>
                </div>
            </div>
        </div>
    ) : null
}

export default SearchBar