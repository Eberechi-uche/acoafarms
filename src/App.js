import "./cartegories.styles.scss";
import { Route, Routes } from "react-router-dom";
import Home from "../src/Routes/Home/Home";
import { NavBar } from "./Routes/Home/NavBar";
import SignIn from "./components/SignIn";
import { SignUp } from "./components/SignUp.component";
import { Shop } from "./Routes/Shop/shop.component";
import { ProductProvider } from "./context/Products.content";
import Checkout from "./Routes/Checkout/Checkout.component";
function App() {
  return (
    <>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />}></Route>
          </Route>
        </Routes>
      </ProductProvider>
    </>
  );
}

export default App;
