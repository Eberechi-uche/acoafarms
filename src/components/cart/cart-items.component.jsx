import "../cart/cart.styles.scss";

export const CartItems = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name}></img>
      <div>
        <span className="name">{name}</span>
        <br />
        <span className="price">
          {quantity} x &#8358;{price}
        </span>
        <hr></hr>
      </div>
    </div>
  );
};
