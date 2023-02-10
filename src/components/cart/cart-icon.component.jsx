import { useState, useContext } from "react";
import { ReactComponent as Cart } from "../../assets/icons/shopping-bag.svg";
import "../cart/cart.styles.scss";
import { cartContext } from "../../context/cart-item.context";

const CartIcon = () => {
  const { isOpen, setIsOpen, cartCount } = useContext(cartContext);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="cart-icon-container" onClick={handleClick}>
        <Cart className="cart-icon"></Cart>
        <span className="cart-item-count text-primary"> {cartCount} </span>
      </div>
    </>
  );
};

export default CartIcon;
