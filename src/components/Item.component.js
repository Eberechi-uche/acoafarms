export function Items({ product }) {
  const { price, name, description, id, imageUrl } = product;
  return (
    <div className="card-container" key={id}>
      <div className="card">
        <div className="card-image">
          <img className="test" src={imageUrl} alt={`${name}`} />
          {/* <div className="test"></div> */}
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

export function ItemsCard({ product }) {
  const { name, description, imageUrl } = product;

  return (
    <div>
      <div
        className=" section-card"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className=" border">
          <h3> {name}</h3>
          <p>{description}</p>
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
}
