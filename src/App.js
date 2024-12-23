import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import './app.css'
import ProductSingle from "./pages/ProductSingle/ProductSingle";
import Zyafka from "./pages/Zyafka/Zyafka";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ProductSingle />} path="/productsingle" />
        <Route element={<Zyafka />} path="/zayafka" />
      </Routes>
    </>
  );
}

export default App;