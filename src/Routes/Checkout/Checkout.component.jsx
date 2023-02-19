import "./checkout.styles.scss";
import { cartContext } from "../../context/cart-item.context";
import { useContext, useEffect, useState } from "react";

const Checkout = () => {
  const [total, setTotal] = useState(0);
  const { cartItems, updateCartitems } = useContext(cartContext);
  const handleClick = (type, name) => {
    updateCartitems(name, type);
  };

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
            handleClick={handleClick}
          />
        ))}
      </div>

      <h2 className="total-text"> Total:&#8358; {total}</h2>
    </div>
  );
};

export const CheckOutItems = ({ name, quantity, image, handleClick }) => {
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
                handleClick("REDUCE", name);
              }}
            >
              -
            </div>
            <p>{quantity}</p>
            <div
              className="quantity-setter"
              onClick={() => {
                handleClick("ADD", name);
              }}
            >
              +
            </div>
          </div>

          <p
            onClick={() => {
              handleClick("DELETE", name);
            }}
            className="quantity-setter"
          >
            &#10005;
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Checkout;
