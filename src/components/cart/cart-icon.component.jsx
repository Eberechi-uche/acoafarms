import { useState } from "react";
import { ReactComponent as Cart } from "../../assets/icons/shopping-bag.svg";
import "../cart/cart-icon.styles.scss";
import CartDropDown from "./cart-dropdown.component";

const CartIcon = () => {
  const [isActive, setIsActive] = useState(true);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="cart-icon-container" onClick={handleClick}>
        <Cart className="cart-icon"></Cart>
        <span className="cart-item-count"> 0 </span>
        <CartDropDown active={isActive} />
      </div>
    </>
  );
};

export default CartIcon;
