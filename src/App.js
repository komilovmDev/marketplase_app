import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import './app.css'
import ProductSingle from "./pages/ProductSingle/ProductSingle";
import Zyafka from "./pages/Zyafka/Zyafka";
import { Profiler, useEffect, useState } from "react";
import HomeProfile from "./pages/components/HomeProfile";
import Login from "./auth/Login";
import Register from "./auth/Register";

function App() {


  const [boxData, setBoxData] = useState(() => {
    const savedData = localStorage.getItem('boxData');
    console.log(savedData);

    return savedData ? JSON.parse(savedData) : [
      {
        date: '21.12',
        locationA: 'Бишкек (KG)',
        locationB: 'Ташкент (UZ)',
        infom3: 'рыба глубокой заморозки 3 т 6 м³',
        date2: '18.12.2024',
        infokm: '~ 632 км, рефрижератор, без догруза (отдельное авто)',
        price: '4 481 230',
        priceUnit: "UZD"
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('boxData', JSON.stringify(boxData));
  }, [boxData]);

  return (
    <>
      <Routes>
        <Route element={<Home boxData={boxData} setBoxData={setBoxData} />} path="/" />
        <Route element={<ProductSingle boxData={boxData} setBoxData={setBoxData} />} path="/productsingle" />
        <Route element={<Zyafka boxData={boxData} setBoxData={setBoxData} />} path="/zayafka" />
        <Route element={<HomeProfile boxData={boxData} setBoxData={setBoxData} />} path="/profil" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </>
  );
}

export default App;