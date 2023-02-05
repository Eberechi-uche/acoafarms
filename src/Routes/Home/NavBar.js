import { Outlet, Link } from "react-router-dom";
import { Profile } from "../../components/Profile.component";
import googleIcon from "../../assets/icons/google.png";

export function NavBar() {
  return (
    <>
      <nav className="nav">
        <Link className="link" to="/">
          <div> ACOA</div>
        </Link>

        <div className="nav-fl">
          <Link className="link" to="/cart">
            <p> cart</p>
          </Link>
          <Link className="link" to="/sign-in">
            <p> sign In</p>
          </Link>
          <Link className="link" to="/sign-in">
            <Profile image={googleIcon}></Profile>
          </Link>
        </div>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
