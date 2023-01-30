import { Layout } from "./Section";
import "../components/component.syles.scss";

export default function Footer() {
  return (
    <Layout title={"Services and Event"}>
      <div className="gr">
        <ul className="fl">
          <li>instagram</li>
          <li>FaceBook</li>
          <li>whatsapp</li>
        </ul>
      </div>
    </Layout>
  );
}
