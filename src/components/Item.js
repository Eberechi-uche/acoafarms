export function Items() {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-image">
          <div className="test"></div>
        </div>
        <div className="card-desc">
          <div className="card-title">
            <h4>Pork</h4>
            <p> $200</p>
          </div>
          <p>
            {" "}
            Naturally reared, freshly smoked porked, made with love, with love
          </p>
          <button className="btn  btn-primary btn-fill"> add to cart</button>
        </div>
      </div>
    </div>
  );
}
