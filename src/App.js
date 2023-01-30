import "./cartegories.styles.scss";
import { Route, Routes } from "react-router-dom";
import Home from "../src/Routes/Home/Home";
import { NavBar } from "./Routes/Home/NavBar";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
