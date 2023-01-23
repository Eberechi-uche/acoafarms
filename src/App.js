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
        <Section itemName={"Beef"}></Section>
        <Section itemName={"Pork"}></Section>
        <Section itemName={"Fish"}></Section>
        <Section itemName={"Chicken"}></Section>
        <Section itemName={"Grills"}></Section>
      </Layout>
      <Layout title={"best sellers"}>
        <Items item={"pork"}></Items>
        <Items item={"smoked fish"}></Items>
        <Items item={"grilled pork"}></Items>
      </Layout>
    </>
  );
}

export default App;
