export function Section({ product }) {
  const { name, description } = product;
  return (
    <div>
      <div className=" section-card">
        <div className=" border">
          <h3> {name}</h3>
          <p>{description}</p>
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export function Layout({ children, title }) {
  return (
    <div>
      <section className="section-container">
        <h3 className="section-header">{title}</h3>
        {children}
      </section>
    </div>
  );
}
