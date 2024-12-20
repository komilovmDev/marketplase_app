import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import './app.css'
import ProductSingle from "./pages/ProductSingle/ProductSingle";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ProductSingle />} path="/productsingle" />
      </Routes>
    </>
  );
}

export default App;
