import "./cartegories.styles.scss";
import { Route, Routes } from "react-router-dom";
import Home from "../src/Routes/Home/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home></Home>} />
      </Routes>
    </>
  );
}

export default App;
