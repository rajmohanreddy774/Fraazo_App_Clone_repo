import React from "react";
import "./Categories.css";
import Slider from "react-slick";
import { slidesetting } from "../Slider";
import ProductCard from "../../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Herbs = () => {
  const data = useSelector((state) =>
    state.product.data.filter((el) => el.category.trim() === "Herbs")
  );
  return (
    <div className="cat_div">
      <Link to="/products/herbs/herbs-and-leafy" className="navLink">
        <h2 className="cat_h2">
          HERBS <span> View All </span>
        </h2>
      </Link>
      <div className="cat_slide">
        <Slider {...slidesetting}>
          {data.map((ele) => (
            <ProductCard prod={ele} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Herbs;
