import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../product';
export const  ShopContext = createContext(null);
const getDefaultCart = () =>{
    let cart = {};
    for(let i = 1; i < PRODUCTS.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}
export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
          if (cartItems[itemId] > 0) {
            const itemInfo = PRODUCTS.find(product => product.id === Number(itemId));
            totalAmount += cartItems[itemId] * itemInfo.price; // Calculate total for each item
          }
        }
        return totalAmount;
      };
      
    const addToCart = (itemId) =>
    {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}));
    };
    const removeFromCart = (itemId) =>
        {
            setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}));
        };
    const updateNewAmount = (newAmount , itemId) =>{
       setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    }
    const clearCart = () => {
        setCartItems(getDefaultCart());
      };
    const contextValue = {cartItems, addToCart, removeFromCart, updateNewAmount, getTotalCartAmount, clearCart};
  return  <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
};
  
