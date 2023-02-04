import "../components/component.syles.scss";
export default function Footer() {
  return (
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
  );
}
