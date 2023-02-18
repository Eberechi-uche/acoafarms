import { useContext } from "react";
import { productsData } from "../../context/Products.content";

import {
  Layout,
  SectionMain,
  Footer,
} from "../../components/Section.component";

import Hero from "../../components/hero.component";
import { Items, ItemsCard } from "../../components/Item.component";

function Home() {
  const topProducts = useContext(productsData);
  const prods = [
    {
      id: 1,
      name: "Beef",
      price: 50,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageUrl: "images/filletbeef.webp",
    },
    {
      id: 2,
      name: "Pork",
      price: 100,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageUrl: "images/pork.jpeg",
    },
    {
      id: 3,
      name: "Fish",
      price: 250,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageUrl: "images/fish.jpeg",
    },
    {
      id: 4,
      name: "Chicken",
      price: 500,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ratione?",
      imageUrl: "images/chicken.jpeg",
    },
    {
      id: 5,

      name: "Grills",
      price: 259,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ratione?",
      imageUrl: "images/grills.jpeg",
    },
  ];

  return (
    <>
      <Hero title={"ACOA"} link={"/shop"}></Hero>
      <Layout grid={"section-child-2"} title={"products"}>
        {prods.map((element) => (
          <ItemsCard key={element.id} product={element}></ItemsCard>
        ))}
      </Layout>
      <Layout title={"best sellers"}>
        {topProducts.map((element) => (
          <Items key={element.id} product={element}></Items>
        ))}
      </Layout>
      <SectionMain />
      <Footer></Footer>
    </>
  );
}
export default Home;
