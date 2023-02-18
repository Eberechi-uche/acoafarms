import { createContext, useState, useEffect } from "react";

export const cartContext = createContext({
  isOpen: false,
  setIsOpen: () => null,
  cartItems: [],
  updateCartitems: () => null,
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

  const updateCartitems = (itemName, type) => {
    const itemIndex = getItem(itemName, cartItems);
    const item = cartItems[itemIndex];
    setCartItems(updateCart(item, itemIndex, cartItems, type));
  };
  useEffect(() => {
    const itemCount = cartItems.reduce(
      (prev, current) => prev + current.quantity,
      0
    );
    setCartCount(itemCount);
  }, [cartItems]);

  const value = {
    isOpen,
    setIsOpen,
    cartItems,
    addItemToCart,
    cartCount,
    updateCartitems,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

const getItem = (itemName, array) => {
  return array.findIndex(({ name }) => itemName === name);
};

const updateCart = (item, itemIndex, array, type) => {
  switch (type) {
    case "ADD": {
      return [
        ...array.slice(0, itemIndex),
        {
          ...item,
          quantity: (item.quantity += 1),
        },
        ...array.slice(itemIndex + 1),
      ];
    }
    case "REDUCE": {
      if (item.quantity === 1) {
        return [...array.slice(0, itemIndex), ...array.slice(itemIndex + 1)];
      }
      return [
        ...array.slice(0, itemIndex),
        {
          ...item,
          quantity: (item.quantity -= 1),
        },
        ...array.slice(itemIndex + 1),
      ];
    }
    case "DELETE": {
      return [...array.slice(0, itemIndex), ...array.slice(itemIndex + 1)];
    }
    default: {
      return [...array];
    }
  }
};
