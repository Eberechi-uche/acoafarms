export default function Section() {
  return (
    <div>
      <div className=" section-card">
        <div className=" border">
          <h3> Beef</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
            tenetur.
          </p>
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
