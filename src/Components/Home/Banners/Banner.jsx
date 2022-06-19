import React from "react";
import "./Banner.css";
import Slider from "react-slick";

const banners = [
  "https://images.fraazo.com/fraazo-prod/web_ban/3942.png",
  "https://images.fraazo.com/fraazo-prod/web_ban/3994.png",
  "https://images.fraazo.com/fraazo-prod/web_ban/3995.png",
  "https://images.fraazo.com/fraazo-prod/web_ban/3997.png",
  "https://images.fraazo.com/fraazo-prod/web_ban/3998.png",
  "https://images.fraazo.com/fraazo-prod/web_ban/3999.png",
  "https://images.fraazo.com/fraazo-prod/web_ban/4000.png",
  "https://images.fraazo.com/fraazo-prod/web_ban/3945.png",
  "https://images.fraazo.com/fraazo-prod/web_ban/3671.png",
];
const Banner = () => {
  const sliding = {
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 3,
    infinite: true,
    autoplay: true,
    dots: true,
  };

  let renderingBanner = banners.map((image, index) => (
    <div  key={index}>
      <img src={image} alt="img"/>
    </div>
  ));

  return (
    <div className="main_banner">
      <div className="banner_main1">
        <Slider {...sliding}>{renderingBanner}</Slider>
      </div>
      <div className="banner_main2">
        <div className="banner_off">
          <img src={"https://fraazo.com/static/Web1-cafcda6bf22c11e6bbaed467d13a0eb7.png"} alt="img" className="banner_images" />
        </div>
        <div className="banner_off">
          <img src={"https://fraazo.com/static/Web2-9a152d86240414d76ce205c491e47c4e.png"} alt="img" className="banner_images" />
        </div>
        <div className="banner_off">
          <img src={"https://fraazo.com/static/Web3-9f5a46f22ff99bcfe079257218356413.png"} alt="img" className="banner_images" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
