import React, { useEffect } from "react";
import { Navbar, Footer, Login } from "../";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home, AllProducts, Detailed, NotFound } from "../../pages";
import { DarkMode } from "../";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../../helpers/persistence-storage";
import { isToken } from "../../slice/auth";
const App = () => {
  const { loggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = getItem('token');
  console.log(loggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      dispatch(isToken(true));
    }
  }, [token]);
  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
  }, [loggedIn]);

  return (
    <div className="dark:bg-black ">
      <Navbar />
      <DarkMode />
      <main className="mt-30 min-h-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/product/:id" element={<Detailed />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
