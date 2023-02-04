import imageLg from "../assets/images/beefImage.png";

export function SectionMain() {
  return (
    <div>
      <div className="gr">
        <ul className="fl li-flex-sp-around">
          <li className="mg-10">instagram</li>
          <li className="mg-10">FaceBook</li>
          <li className="mg-10">whatsapp</li>
        </ul>
      </div>
      <div>
        <div className="image-container fl fl-center">
          <img src={imageLg} alt="raw beef and natural spice"></img>
        </div>
      </div>
      <div className="gr txt-start mg-10">
        <div>
          <h3 className="mg-bottom-5">
            All <span className="text-primary"> Natural</span> feeds
          </h3>
          <div className=" gr pd-10">
            <div className="gr-item">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                voluptate quaerat accusamus perferendis ratione quae!
              </p>
            </div>
            <div className="gr-item">
              <ul className="pd-0 li-none">
                <li className="mg-bottom-5">
                  Lorem, ipsum dolor sit amet consectetur
                </li>
                <li className="mg-bottom-5">
                  Lorem, ipsum dolor sit amet consectetur
                </li>
                <li className="mg-bottom-5">
                  Lorem, ipsum dolor sit amet consectetur
                </li>
                <li className="mg-bottom-5">
                  Lorem, ipsum dolor sit amet consectetur
                </li>
              </ul>
            </div>
          </div>
          <button className="btn btn-primary mg-top-15"> Order Now</button>
        </div>
      </div>
    </div>
  );
}

export function Layout({ children, title }) {
  return (
    <>
      <section className="section-container">
        <h3 className="section-header">{title}</h3>
        <div className="section-child">{children}</div>
      </section>
    </>
  );
}
