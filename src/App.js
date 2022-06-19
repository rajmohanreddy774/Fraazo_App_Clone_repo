import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import ProductsList from "./Components/ProductsList/ProductsList";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import LoginSample from "./Components/Login/Login";




function App() {



  return (
    <div className="App">
      <Navbar />
      <div className="app_container">
        <Routes>
          <Route path="/" element={<Home />} />
         
         <Route path="/login" element={<LoginSample/>}/>

          <Route
            path="/products/mangoes/:subcategory"
            element={<ProductsList />}
          />
          <Route
            path="/products/vegetables/:subcategory"
            element={<ProductsList />}
          />
          <Route
            path="/products/fruits/:subcategory"
            element={<ProductsList />}
          />
          <Route
            path="/products/herbs/:subcategory"
            element={<ProductsList />}
          />
          <Route
            path="/products/dryfruits/:subcategory"
            element={<ProductsList />}
          />
          <Route
            path="/products/kitchenstapels/:subcategory"
            element={<ProductsList />}
          />
          <Route
            path="/products/category/:subcategory"
            element={<ProductsList />}
          />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>

      <Footer />
      
    </div>
  );
}

export default App;
