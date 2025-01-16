import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import product from "./pages/Product";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Product" element={<product />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
