import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { BiRupee } from "react-icons/bi";
import { useParams,Link } from "react-router-dom";
import BestDeals from "../Home/BestDeals/BestDeals";
import AddToCartBtn from "../AddToCart Button/AddToCartBtn";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://fraazo-clone.herokuapp.com/fraazo/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
    
  }, [id]);

  const [show, setShow] = useState({
    description: true,
    benefits: false,
    info: false,
  });
  return (
    <div className="Box">
      <div className="prod_details">
        <div className="path_to_product">
          Home/{product.category}/<Link to={`/products/category/${product.sub_category}`} className="navLink">{product.sub_category}</Link>/<b>{product.name}</b>
        </div>
        <div className="productdetails">
          <div className="product_imgdiv">
            <img src={product.image} alt="" className="product_img" />
          </div>
          <div className="productinfo">
            <div className="productname">{product.name}</div>
            <div className="productweight">{product.weight}</div>
            <div className="productprice">
              <div className="product_orig_prize">
                <BiRupee />
                {product.prize}
              </div>
              <div className="prod-old-prize">
                {product.old_prize && <BiRupee />}
                {product.old_prize}
              </div>
            </div>
            <div className="add_cart_buttonDiv">
             
               <AddToCartBtn prod={product} />
            </div>
            <div className="product_details_tabs">
              <div className="details_tabs">
                <div
                  className={show.description ? "detail_tab active" : "detail_tab"}
                  onClick={() =>
                    setShow({ description: true, benefits: false, info: false })
                  }
                >
                  Description
                </div>
                <div
                  className={show.benefit ? "detail_tab active" : "detail_tab"}
                  onClick={() =>
                    setShow({ description: false, benefits: true, info: false })
                  }
                >
                  Benefits
                </div>
                <div
                  className={show.info ? "detail_tab active" : "detail_tab"}
                  onClick={() =>
                    setShow({ description: false, benefits: false, info: true })
                  }
                >
                  Info
                </div>
              </div>
              <div className="product_details_tab_details">
                {show.description && <p>{product.description}</p>}
                {show.benefits && <p>{product.benifit}</p>}
                {show.info && <p>{product.info}</p>}
              </div>
            </div>
          </div>
        </div>
        <BestDeals />
      </div>
    </div>
  );
};

export default ProductDetails;
