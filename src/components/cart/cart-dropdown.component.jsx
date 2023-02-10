import "../cart/cart-icon.styles.scss";

const CartDropDown = ({ active }) => {
  const state = active ? "visible" : "";
  return (
    <div className={` cart-dropdown-container ${state}`}>
      <div className="cart-items"></div>
      <button className="btn btn-primary"> Check out</button>
    </div>
  );
};
export default CartDropDown;
