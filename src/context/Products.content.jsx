import { createContext } from "react";
import SHOP_DATA from "../shop-data.json";

export const productsData = createContext([]);

export const ProductProvider = ({ children }) => {
  const productsValue = SHOP_DATA;
  return (
    <>
      <productsData.Provider value={productsValue}>
        {children}
      </productsData.Provider>
    </>
  );
};
