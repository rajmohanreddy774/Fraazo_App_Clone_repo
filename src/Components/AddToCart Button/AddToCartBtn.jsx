import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import { addItemToCart, decrementCartProd, incrementCartProd } from "../../Redux/cart/action";

const AddToCartBtn = ({ prod }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [presentInCart, setPresentInCart] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    for (let i = 0; i < cartItems.length; i++) {
         if (cartItems[i]._id === prod._id) {
          setPresentInCart(true);
            return;
          }
      }
      setPresentInCart(false);
  }, [cartItems, prod]);
    
    
  return (
    <div >
      {presentInCart ? (
        <div >
          <div
         
            onClick={() => dispatch(decrementCartProd(prod))}
          >
            -
          </div>
          {cartItems.map((el) => (el._id === prod._id ? el.cart : null))}
          <div
            
            onClick={() => dispatch(incrementCartProd(prod))}
          >
            +
          </div>
        </div>
      ) : (
        <button
         
          onClick={() => dispatch(addItemToCart(prod))}
        >
          <FaCartPlus />
          ADD
        </button>
      )}
    </div>
  );
};

export default AddToCartBtn;
