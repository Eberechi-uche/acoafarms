import { Outlet, Link } from "react-router-dom";

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

          <p>menu</p>
        </div>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
