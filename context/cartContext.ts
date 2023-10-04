"use client"
import { createContext, useContext } from "react";
import { product } from "../lib/types/product.type";

export type Item ={id:string, title:string, price:number}

export type CartContextType = {
  cartItems: product[];
  addToCart: (item: product) => void;
  removeFromCart: (item: product) => void;
  clearCart: () => void;
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

