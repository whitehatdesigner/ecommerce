import { createContext, useEffect, useState } from "react";
import { ShopProducts } from "../assets/ShopProducts"; // Ensure this path is correct
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

function ShopContextProvider({ children }) {
    const [currency, setCurrency] = useState("$");
    const [deliveryFee, setDeliveryFee] = useState(10);
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [products, setProducts] = useState(ShopProducts);
    const [cartItems, setCartItems] = useState({});

    const navigate = useNavigate();

    const addToCart = async (itemId, itemSize) => {

        if (!itemSize) {
            toast.error('Select Product Size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][itemSize]) {
                cartData[itemId][itemSize] += 1;
            } else {
                cartData[itemId][itemSize] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][itemSize] = 1;
            toast.success('Item added')
        }
        setCartItems(cartData);
    }

    const updateCart = async(itemId, itemSize, quantity) => {
        
        let cartData = structuredClone(cartItems);

        cartData[itemId][itemSize] = quantity;

        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;

        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];

                    }
                } catch (error) {

                }

            }
        }
        return totalCount;
    }

    const getCartAmount = async => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]){
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }


const value = {
    products, ShopProducts, currency, setCurrency, deliveryFee, setDeliveryFee, search, setSearch, showSearch, setShowSearch, cartItems, addToCart, getCartCount, updateCart, getCartAmount, navigate
};

return (
    <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
);
}

export default ShopContextProvider;
