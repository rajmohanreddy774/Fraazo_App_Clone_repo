import React from "react";
import './ProfuctCat.css'

import { Link } from "react-router-dom";

const ProductTypes = () => {
  return (
    <div className="product_cat">
      <Link to="/products/mangoes/mangoes">
        <div className="product_types-img">
          <img src={"https://images.fraazo.com/fraazo-prod/web/298.png"} alt="" className="productcat" />
        </div>
      </Link>
      <Link to="/products/fruits/apples-pears-plums">
        <div className="product_types-img">
          <img src={"https://images.fraazo.com/fraazo-master/webban/Fruits.png"} alt="" className="productcat" />
        </div>
      </Link>
      <Link to="/products/vegetables/daily-veggies">
        <div className="product_types-img">
          <img src={"https://images.fraazo.com/fraazo-master/webban/Vegetables.png"} alt="" className="productcat" />
        </div>
      </Link>
      <Link to="/products/dryfruits/premium-quality-dryfruits">
        <div className="product_types-img">
          <img src={"https://images.fraazo.com/fraazo-prod/web/201.png"} alt="" className="productcat" />
        </div>
      </Link>
      <Link to="/products/kitchenstapels/dals-pulses">
        <div className="product_types-img">
          <img src={"https://images.fraazo.com/fraazo-prod/web/199.png"} alt="" className="productcat" />
        </div>
      </Link>
    </div>
  );
};

export default ProductTypes;
