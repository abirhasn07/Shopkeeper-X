import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.scss";
import { commerce } from "./lib/commerce";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";

const App = () => {
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchProducts();
    }, 0);
  }, []);

  const newProducts = products?.slice(0, 4);
  const latestProducts = products?.slice(6, 14);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home 
            products={newProducts} 
            latestProducts={latestProducts}
             />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
