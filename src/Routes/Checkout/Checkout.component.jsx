import "./checkout.styles.scss";
import { cartContext } from "../../context/cart-item.context";
import { useContext, useEffect, useState } from "react";

const Checkout = () => {
  const [total, setTotal] = useState(0);
  const { cartItems } = useContext(cartContext);

  useEffect(() => {
    let total = 0;
    cartItems.forEach(({ price, quantity }) => {
      total += price * quantity;
    });
    setTotal(total);
  }, [cartItems]);

  return (
    <div>
      <div>
        {cartItems.map(({ id, name, quantity, imageUrl }) => (
          <CheckOutItems
            key={id}
            name={name}
            quantity={quantity}
            image={imageUrl}
          />
        ))}
      </div>

      <h2 className="total-text"> {total}</h2>
    </div>
  );
};

export const CheckOutItems = ({ name, quantity, image }) => {
  const { updateCartitems } = useContext(cartContext);
  const item = name;
  const handleClick = (type) => {
    updateCartitems(item, type);
  };
  return (
    <div>
      <div className="checkout-container">
        <img src={image} alt={name} className="img" />
        <p>{name} </p>
        <div className="itemCount">
          <div className="flex">
            <div
              className="quantity-setter"
              onClick={() => {
                handleClick("REDUCE");
              }}
            >
              -
            </div>
            <p>{quantity}</p>
            <div
              className="quantity-setter"
              onClick={() => {
                handleClick("ADD");
              }}
            >
              +
            </div>
          </div>

          <p
            onClick={() => {
              handleClick("DELETE");
            }}
          >
            X
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Checkout;
