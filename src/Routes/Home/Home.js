import { Layout, SectionMain } from "../../components/Section.component";
import Footer from "../../components/footer.component";
import Hero from "../../components/hero.component";
import { Items, ItemsCard } from "../../components/Item.component";

function Home() {
  const prods = [
    {
      id: 1,
      name: "Beef",
      price: 50,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ratione?",
    },
    {
      id: 2,
      name: "Pork",
      price: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ratione?",
    },
    {
      id: 3,
      name: "Fish",
      price: 250,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ratione?",
    },
    {
      id: 4,
      name: "Chicken",
      price: 500,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ratione?",
    },
    {
      id: 5,

      name: "Grills",
      price: 259,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ratione?",
    },
  ];

  return (
    <>
      <Hero title={"ACOA"}></Hero>
      <Layout title={"products"}>
        {prods.map((element) => (
          <ItemsCard key={element.id} product={element}></ItemsCard>
        ))}
      </Layout>
      <Layout title={"best sellers"}>
        {prods.map((element) => (
          <Items key={element.id} product={element}></Items>
        ))}
      </Layout>
      <SectionMain />
      <Footer></Footer>
    </>
  );
}
export default Home;
