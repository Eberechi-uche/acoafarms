import { createContext, useState, useEffect } from "react";

export const cartContext = createContext({
  isOpen: false,
  setIsOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

const addItem = (productToAdd, cartItems) => {
  const productExist = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });

  if (productExist) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: (item.quantity += 1) }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const addItemToCart = (product) => {
    setCartItems(addItem(product, cartItems));
  };

  useEffect(() => {
    const itemCount = cartItems.reduce(
      (prev, current) => prev + current.quantity,
      0
    );
    setCartCount(itemCount);
  }, [cartItems]);

  const value = { isOpen, setIsOpen, cartItems, addItemToCart, cartCount };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
