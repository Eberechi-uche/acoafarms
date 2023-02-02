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
          <Link className="link" to="/sign In">
            <p> sign In</p>
          </Link>

          <p>menu</p>
        </div>
      </nav>
      <Outlet></Outlet>
      <div className="pd-10 bg-dark">
        <div>
          <h4 className="mg-0 white fnt-md">contact</h4>
          <ul className="mg-0 li-none pd-0">
            <li>number</li>
            <li>info@company.com</li>
            <li>location</li>
          </ul>
        </div>
        <div className="fl fl-center">
          <p>&copy; copyright 2023 ACOA</p>
        </div>
      </div>
    </>
  );
}
