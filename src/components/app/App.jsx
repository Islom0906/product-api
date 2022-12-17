import React from "react";
import { Navbar, Footer } from "../";
import { Route, Routes } from "react-router-dom";
import { Home, AllProducts,Detailed,NotFound } from "../../pages";
import {DarkMode} from '../'
const App = () => {
  return (
    <div className="dark:bg-black ">
      <Navbar />
      <DarkMode/>
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
