import { Link } from "react-router-dom";

export function Hero({ title, link }) {
  return (
    <div>
      <header className="header">
        <main className="main ">
          <div>
            <h2> {title}</h2>
          </div>
        </main>
      </header>
    </div>
  );
}
export const MainHero = () => {
  return (
    <header className="header">
      <main className="main">
        <h1>ACOA</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </p>
        <Link to="/shop">
          <button className="btn btn-primary">shop now</button>
        </Link>
      </main>
    </header>
  );
};
