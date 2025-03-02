import { createContext, useState } from "react";
import { products } from "../assets/products";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const [currency, SetCurrency] = useState("$");

    const [deliveryFee, SetDeliveryFee] = useState("10");

    const value = {
        products, currency, SetCurrency, deliveryFee, SetDeliveryFee
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;