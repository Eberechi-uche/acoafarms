import { useContext } from "react";
import { cartContext } from "../../context/cart-item.context";
import { CartItems } from "./cart-items.component";

import "../cart/cart.styles.scss";

const CartDropDown = () => {
  const { cartItems } = useContext(cartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItems key={item.id} cartItem={item}></CartItems>
        ))}
      </div>

      <button className="btn btn-primary"> Check out</button>
    </div>
  );
};
export default CartDropDown;
