import React from "react";
import "./Categories.css";
import Slider from "react-slick";
import { slidesetting } from "../Slider";
import ProductCard from "../../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const DryFruits = () => {
  const data = useSelector((state) =>
    state.product.data.filter((ele) => ele.category.trim() === "Dry Fruits")
  );
  return (
    <div className="cat_div">
      <Link
        to="/products/dryfruits/premiumdryfruits"
        className="navLink"
      >
        {" "}
        <h2 className="cat_h2">
          DRY FRUITS <span>View All</span>
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

export default DryFruits;
