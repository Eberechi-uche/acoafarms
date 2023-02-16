import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/cart-item.context";
import { CartItems } from "./cart-items.component";

import "../cart/cart.styles.scss";

const CartDropDown = () => {
  const { cartItems, setIsOpen, isOpen } = useContext(cartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItems key={item.id} cartItem={item}></CartItems>
        ))}
      </div>
      <Link
        to="/checkout"
        className="btn btn-primary"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div>Check out</div>
      </Link>
    </div>
  );
};
export default CartDropDown;
