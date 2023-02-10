import { useContext } from "react";
import { userContext } from "../../context/user.context";
import { Outlet, Link } from "react-router-dom";
import { userSignOut } from "../../Utils/firebase/firebase.utils";
import CartIcon from "../../components/cart/cart-icon.component";
import CartDropDown from "../../components/cart/cart-dropdown.component";
import { cartContext } from "../../context/cart-item.context";
export function NavBar() {
  const { currentUser, setCurrentUser } = useContext(userContext);
  const { isOpen } = useContext(cartContext);
  const handleSignOut = async () => {
    const user = await userSignOut();
    setCurrentUser(user);
  };
  return (
    <>
      <nav className="nav">
        <Link className="link" to="/">
          <div> ACOA</div>
        </Link>

        <div className="nav-fl">
          <CartIcon />
          <Link className="link" to="/shop">
            <p> shop</p>
          </Link>
          {currentUser ? (
            <p onClick={handleSignOut} className="btn bg-dark pd-s-5 ">
              sign Out
            </p>
          ) : (
            <Link className="link" to="/sign-in">
              sign In
            </Link>
          )}
          {isOpen && <CartDropDown></CartDropDown>}
        </div>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
