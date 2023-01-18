import "./cartegories.styles.scss";
import Hero from "./components/hero";
import Section from "./components/Section";
import { Layout } from "./components/Section";
import { Items } from "./components/Item";

function App() {
  return (
    <>
      <Hero></Hero>
      <Layout title={"products"}>
        <Section></Section>
        <Section></Section>
      </Layout>
      <Layout title={"best sellers"}>
        <Items></Items>
      </Layout>
    </>
  );
}

export default App;
