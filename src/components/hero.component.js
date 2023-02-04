export default function Hero({ title }) {
  return (
    <div>
      <header className="header">
        <main className="main test">
          <div>
            <h1> {title}</h1>
            <button className="btn btn-primary">show now</button>
          </div>
        </main>
      </header>
    </div>
  );
}
