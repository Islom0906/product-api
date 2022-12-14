import React from "react";
import { Navbar, Footer } from "../";
import { Route, Routes } from "react-router-dom";
import { Home, AllProducts,Detailed,NotFound } from "../../pages";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="mt-30 min-h-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/product/:id" element={<Detailed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
