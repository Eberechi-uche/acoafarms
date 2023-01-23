export function Items({ product }) {
  const { price, name, description } = product;
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-image">
          <div className="test"></div>
        </div>
        <div className="card-desc">
          <div className="card-title">
            <h4>{name}</h4>
            <p>
              <span>&#8358;</span>
              {price}
            </p>
          </div>
          <p>{description}</p>
          <button className="btn  btn-primary btn-fill"> add to cart</button>
        </div>
      </div>
    </div>
  );
}
