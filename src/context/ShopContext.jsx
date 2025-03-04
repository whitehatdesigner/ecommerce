import { createContext, useState } from "react";
import { ShopProducts } from "../assets/ShopProducts"; // Ensure this path is correct

export const ShopContext = createContext();

// Use a named function component instead of an arrow function
function ShopContextProvider({ children }) {
    const [currency, setCurrency] = useState("$");
    const [deliveryFee, setDeliveryFee] = useState(10);

    const value = {
        ShopProducts, currency, setCurrency, deliveryFee, setDeliveryFee
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
