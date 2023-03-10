import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user.context";
import "./index.scss";
import App from "./App";

import { CartContextProvider } from "./context/cart-item.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
