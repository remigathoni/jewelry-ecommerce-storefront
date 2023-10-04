"use client"
import { ReactNode, useState } from "react";
import { product } from "../lib/types/product.type";
import { CartContext, CartContextType } from "./cartContext";

const CartProvider = ({ children }:{children: ReactNode}) => {
  const [cartItems, setcartItems] = useState<product[]>([])

  const addToCart = (product:product) => {
    const updatedCart:product[] = [...cartItems, product]
    setcartItems(updatedCart)  };

  const removeFromCart = (product: product) => {
    const updatedCart = cartItems.filter(
      (currentProduct) => currentProduct.id !== product.id

    );
    setcartItems(updatedCart)
  }
  const clearCart = () => {
    setcartItems([]);
  };

  const cartContextValue: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };
  return (
    <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
  )
};

export default CartProvider