import React, { useEffect, useState } from "react";
import "./ProductsList.css";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";

const ProductsList = () => {
  const { subcategory } = useParams();
  const data = useSelector((state) => state.product.data);
  const [prodData, setProdData] = useState([]);
  const [openMangoes, setOpenMangoes] = useState(false);
  const [openVegetables, setOpenVegetables] = useState(false);
  const [openFruits, setOpenFruits] = useState(false);
  const [openHerbs, setOpenHerbs] = useState(false);
  const [openDryFruits, setOpenDryFruits] = useState(false);
  const [openKitchenStaples, setOpenKitchenStaples] = useState(false);


 
  useEffect(() => {
    fiterCategory();
    window.scroll(0, 0);
  }, [subcategory]);

  function fiterCategory() {
    const filterData = data.filter((ele) => ele.sub_category === subcategory);

    setProdData(filterData);
  }

  return (
    <div className="Box">
      <div className="prodslist">
        <div className="prod_div">
          <div >
            <div className="prodsub_div">
              <div className="productitem">
                <div
                  className="producttitle"
                  onClick={() => setOpenMangoes(!openMangoes)}
                >
                  <div style={{ color: "green", fontSize: "20px" }}>
                    {openMangoes ? "-" : "+"}
                  </div>
                  <div>Mangoes</div>
                </div>
                {openMangoes && (
                  <>
                    <Link to="/products/mangoes/mangoes" className="navLink">
                      <div className="productcontent">
                        {">"}Mangoes
                      </div>
                    </Link>
                  </>
                )}
              </div>
              <div className="productitem">
                <div
                  className="producttitle"
                  onClick={() => setOpenFruits(!openFruits)}
                >
                  <div>{openFruits ? "-" : "+"}</div>
                  <div>Fruits</div>
                </div>
                {openFruits && (
                  <>
                    <Link
                      to="/products/fruits/apples-pears"
                      className="navLink"
                    >
                      <div className="productcontent">
                        {">"}Apples, Pears, Plums
                      </div>
                    </Link>
                    <Link
                      to="/products/fruits/oranges-mosambi-melons"
                      className="navLink"
                    >
                      <div className="productcontent">
                        {">"} Oranges, Mosambi & Melons
                      </div>
                    </Link>
                    <Link
                      to="/products/fruits/papaya-pineapple-pomegranate"
                      className="navLink"
                    >
                      <div className="productcontent">
                        {">"} Papaya, Pineapple, Pomegranate
                      </div>
                    </Link>
                    <Link
                      to="/products/fruits/grapes-banana-guava-sapota"
                      className="navLink"
                    >
                      <div className="productcontent">
                        {">"} Grapes, Banana, Guava & Sapota
                      </div>
                    </Link>
                    <Link
                      to="/products/fruits/exotic-fruits"
                      className="navLink"
                    >
                      <div className="productcontent">
                        {">"}  Exotic Fruits
                      </div>
                    </Link>
                    <Link
                      to="/products/fruits/fruit-combos"
                      className="navLink"
                    >
                      <div className="productcontent">
                        {" "}
                        {">"} Fruit Combos
                      </div>
                    </Link>
                  </>
                )}
              </div>
              <div className="productitem">
                <div
                  className="producttitle"
                  onClick={() => setOpenVegetables(!openVegetables)}
                >
                  <div>{openVegetables ? "-" : "+"}</div>
                  <div>Vegetables</div>
                </div>
                {openVegetables && (
                  <>
                    <Link
                      to="/products/vegetables/daily-veggies"
                      className="navLink"
                    >
                      <div className="productcontent">
                        {">"} {"   "} Daily Veggies
                      </div>
                    </Link>
                    <Link
                      to="/products/vegetables/onion-potato-and-tomatoes"
                      className="navLink"
                    >
                      <div className="productcontent">
                        {">"} {"   "} Onion, Potato & Tomatoes
                      </div>
                    </Link>
                    <Link
                      to="/products/vegetables/root-vegetables"
                      className="navLink"
                    >
                      <div className="productcontent">
                        {">"} Root Vegetable
                      </div>
                    </Link>
                    <Link
                      to="/products/vegetables/exotic-vegetables"
                      className="navLink"
                    >
                      <div className="productcontent">
                        {">"} Exotic Vegetables
                      </div>
                    </Link>
                    <Link
                      to="/products/vegetables/vegetable-combos"
                      className="navLink"
                    >
                      <div className="productcontent">
                        {">"} Vegetable Combos
                      </div>
                    </Link>
                    <Link
                      to="/products/vegetables/cuts-peeled-and-sprouts"
                      className="navLink"
                    >
                      <div className="productcontent">
                        {">"}Cuts, Peeled & Sprouts
                      </div>
                    </Link>
                  </>
                )}
              </div>
              <div className="productitem">
                <div
                  className="producttitle"
                  onClick={() => setOpenHerbs(!openHerbs)}
                >
                  <div>{openHerbs ? "-" : "+"}</div>
                  <div>Herbs</div>
                </div>
                {openHerbs && (
                  <>
                    <Link
                      to="/products/herbs/herbs-and-leafy"
                      className="navLink"
                    >
                      <div className="productcontent">
                        {">"}Herbs & Leafy Products
                      </div>
                    </Link>
                  </>
                )}
              </div>
              <div className="productitem">
                <div
                  className="producttitle"
                  onClick={() => setOpenDryFruits(!openDryFruits)}
                >
                  <div>{openDryFruits ? "-" : "+"}</div>
                  <div>Dry Fruits</div>
                </div>
                {openDryFruits && (
                  <>
                    <Link
                      to="/products/dryfruits/premiumdryfruits"
                      className="navLink"
                    >
                      <div className="productcontent">
                        {">"}Premium Quality Dry Fruits
                      </div>
                    </Link>
                  </>
                )}
              </div>
              <div className="productitem">
                <div
                  className="producttitle"
                  onClick={() => setOpenKitchenStaples(!openKitchenStaples)}
                >
                  <div>{openKitchenStaples ? "-" : "+"}</div>
                  <div>Kitchen Staples</div>
                </div>
                {openKitchenStaples && (
                  <>
                    <Link
                      to="/products/kitchenstapels/dals-pulses"
                      className="navLink"
                    >
                      <div className="productcontent">
                        {">"} Dals & Pulses
                      </div>
                    </Link>
                    <Link
                      to="/products/kitchenstapels/atta-flour-sooji"
                      className="navLink"
                    >
                      <div className="productcontent">
                        {">"} Atta, Flour and Sooji
                      </div>
                    </Link>
                    <Link
                      to="/products/kitchenstapels/rice-produts"
                      className="navLink"
                    >
                      <div className="productcontent">
                        {">"}Rice and Rice Products
                      </div>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="products_listing_products">
         
          <div className="products_list">
            {prodData.map((ele) => (
              <ProductCard prod={ele} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
