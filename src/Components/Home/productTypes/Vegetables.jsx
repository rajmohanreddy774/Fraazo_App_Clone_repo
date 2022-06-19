import React from "react";
import "./Categories.css";
import Slider from "react-slick";
import { slidesetting } from "../Slider";
import ProductCard from "../../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Vegetables = () => {
  const data = useSelector((state) =>
    state.product.data.filter((el) => el.category.trim() === "Vegetables")
  );
  return (
    <div className="cat_div">
      <Link to="/products/vegetables/veggies" className="navLink">
        <h2 className="cat_h2">
          VEGETABLES <span> View All </span>
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

export default Vegetables;
