import React, { useEffect } from "react";
import Banner from "./Banners/Banner";
import BestDeals from "./BestDeals/BestDeals";
import DryFruits from "./productTypes/DryFruits";
import Fruits from "./productTypes/Fruits";
import Vegetables from "./productTypes/Vegetables";
import Herbs from "./productTypes/Herbs";
import Mangoes from "./productTypes/Mangoes";
import ProductTypes from "./ProductCategory/productTypes";
import DownloadApp from "./DownloadApp/DownloadApp";
import { getProducts } from "../../Redux/products/action";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className="Box">
      <div className="container">
        <Banner />
        <BestDeals  />
        <ProductTypes />
        <Mangoes />
        <Fruits />
        <Vegetables />
        <Herbs />
        <DryFruits />
      </div>
      <DownloadApp />
    </div>
  );
};

export default Home;
