import { createContext, useState } from 'react';
import React from "react";
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);
const getDefaultcart =()=>{
    let cart ={};
    for(let i=0;i<all_product.length;i++){
        cart[i]= 0;

    }
    return cart;
}

function ShopContextProvider(props){
    const [cartItem , setCartItem] = useState(getDefaultcart());


    // console.log(cartItem);

    const addToCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    // console.log(cartItem);
    const removeFromCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount =() =>{
        let totalAmount =0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                totalAmount += itemInfo.new_price * cartItem[item];
            }
        }
        return totalAmount;
    }

    function getTotalCartItems(){
        let totalIem = 0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                totalIem += cartItem[item];
            }
        }
        return totalIem;
    }

    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItem,addToCart,removeFromCart};
    return(
        <ShopContext.Provider value={contextValue}>
           {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;