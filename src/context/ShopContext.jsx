import { createContext, useState } from "react";
import { ShopProducts } from "../assets/ShopProducts";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const [currency, SetCurrency] = useState("$");

    const [deliveryFee, SetDeliveryFee] = useState(10);

    const value = {
        ShopProducts, currency, SetCurrency, deliveryFee, SetDeliveryFee
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;