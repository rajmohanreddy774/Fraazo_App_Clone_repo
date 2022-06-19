import React from "react";
import "./BestDeals.css";
import Slider from "react-slick";
import { slidesetting } from "../Slider";
import { useSelector } from "react-redux";
import ProductCard from "../../ProductCard/ProductCard";

const BestDeals = () => {
  const data = useSelector((state) =>
    state.product.data.filter((el) => el.tag === "best")
  );

  return (
    <div className="best_deals">
      <h2 className="best_deals_heading">BEST DEALS</h2>
      <div className="best_deals_slider">
        {data !== null && (
          <Slider {...slidesetting}>
            {data.map((ele) => (
              <ProductCard prod={ele} />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default BestDeals;
