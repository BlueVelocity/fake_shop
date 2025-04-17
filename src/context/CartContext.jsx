import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartContents, setCartContents] = useState([]);

  const addToCart = (itemData) => {
    setCartContents(prevCart => {
      const existingItem = prevCart.find(item => item.name === itemData.name);
      if (existingItem) {
        return prevCart.map(item => 
          item.name === itemData.name 
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prevCart, { ...itemData, qty: 1 }];
    });
  };

  const removeFromCart = (itemData, removeAll = false) => {
    setCartContents(prevCart => {
      const existingItem = prevCart.find(item => item.name === itemData.name);
      if (!existingItem) return prevCart;

      if (removeAll || existingItem.qty === 1) {
        return prevCart.filter(item => item.name !== itemData.name);
      }

      return prevCart.map(item => 
        item.name === itemData.name 
          ? { ...item, qty: item.qty - 1 }
          : item
      );
    });
  };

  const value = {
    cartContents,
    addToCart,
    removeFromCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 