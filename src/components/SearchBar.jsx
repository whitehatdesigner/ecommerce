import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext)

  return (
    <div>SearchBar</div>
  )
}

export default SearchBar