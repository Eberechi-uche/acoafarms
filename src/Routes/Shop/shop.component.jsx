import { useContext } from "react";
import { productsData } from "../../context/Products.content";
import { Footer, Layout } from "../../components/Section.component";
import Hero from "../../components/hero.component";
import { Items } from "../../components/Item.component";

export const Shop = () => {
  const allProducts = useContext(productsData);
  return (
    <>
      <Hero title={"Products"}></Hero>
      <Layout>
        {allProducts.map((products) => (
          <Items key={products.id} product={products} />
        ))}
      </Layout>
      <Footer />
    </>
  );
};
