import React, { useState, useEffect } from "react";
import "./ProductCard.css";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AddToCartBtn from "../AddToCart Button/AddToCartBtn";

const ProductCard = ({ prod }) => {
 

  const cartItems = useSelector((state) => state.cart.cartItems);
  const [presentInCart, setPresentInCart] = useState(false);

  useEffect(() => {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i]._id === prod._id) {
        setPresentInCart(true);
        break;
      }
    }
  }, [cartItems]);

  return (
    <div className="prodcard">
      <div className="product_imgDiv">
        <Link to={`/products/${prod._id}`} style={{ textDecoration: "none" }}>
          <img src={prod.image} alt="" className="product_img" />
        </Link>
      </div>
      <div className="product_div">
        <div className="product_name">{prod.name}</div>
        <div className="product_more_info">
          <div className="prodweight">
            <div >{prod.weight}</div>
            <div className="prodPrice">
              <div className="prodOrgPrice">
                <BiRupee />
                {prod.prize}
              </div>
              <div className="prodOldPrice">
                {prod.old_prize && <BiRupee />}
                {prod.old_prize}
              </div>
            </div>
          </div>
          <div className="add_cart_buttonDiv">
           
            <AddToCartBtn prod={prod} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
