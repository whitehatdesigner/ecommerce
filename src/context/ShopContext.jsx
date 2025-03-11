import { createContext, useState } from "react";
import { ShopProducts } from "../assets/ShopProducts"; // Ensure this path is correct

export const ShopContext = createContext();

function ShopContextProvider({ children }) {
    const [currency, setCurrency] = useState("$");
    const [deliveryFee, setDeliveryFee] = useState(10);
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [products, setProducts] = useState(ShopProducts);
    const [cartItems, setCartItems] = useState({});

    const addtocart = async (itemId, itemSize) => {

        let cartData = structuredClone(cartItems);

    }

    const value = {
        products, ShopProducts, currency, setCurrency, deliveryFee, setDeliveryFee, search, setSearch, showSearch, setShowSearch
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
