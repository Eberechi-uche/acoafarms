import { useContext } from "react";
import { userContext } from "../../context/user.context";
import { Outlet, Link } from "react-router-dom";
import { userSignOut } from "../../Utils/firebase/firebase.utils";
import CartIcon from "../../components/cart/cart-icon.component";

export function NavBar() {
  const { currentUser, setCurrentUser } = useContext(userContext);
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
          <CartIcon></CartIcon>
        </div>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
