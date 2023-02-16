import { Link } from "react-router-dom";

export default function Hero({ title, link }) {
  return (
    <div>
      <header className="header">
        <main className="main test">
          <div>
            <h1> {title}</h1>
            {link && (
              <Link to={link}>
                <button className="btn btn-primary">shop now</button>
              </Link>
            )}
          </div>
        </main>
      </header>
    </div>
  );
}
