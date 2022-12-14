/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Headers from "../../Components/Header";
import Footer from "../../Components/Footer";

const PrevArrow = props => {
  const { onClick, styleArrowWrap } = props;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          ...styleArrowWrap,
          left: "6.5rem",
        }}
        onClick={onClick}>
        <i
          className="fa-solid fa-chevron-left homepage__slider__button--left"
          style={{ color: "white", opacity: 0.5 }}
        />
      </div>
    </div>
  );
};

const NextArrow = props => {
  const { onClick, styleArrowWrap } = props;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          ...styleArrowWrap,
          right: "6.5rem",
        }}
        onClick={onClick}>
        <i
          className="fa-solid fa-chevron-right homepage__slider__button--right"
          style={{ color: "white", opacity: 0.5 }}
        />
      </div>
    </div>
  );
};

const HomePage = () => {
  const styleArrowWrap = {
    position: "absolute",
    top: 0,
    bottom: 0,
    marginTop: "auto",
    marginBottom: "auto",
    display: "flex",
    alignItems: "center",
    borderRadius: 0,
    transform: "scale(1.75)",
    zIndex: 1,
  };

  const settings = {
    dots: true,
    dotsClass: "homepage__slider__dots",
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    customPaging: function (i) {
      return (
        <button
          className="homepage__slider__dots__button"
          style={{
            display: "inline-block",
            width: "1.75rem",
            height: ".15rem",
            zIndex: 1,
            borderWidth: 0,
          }}
        />
      );
    },
    prevArrow: <PrevArrow styleArrowWrap={styleArrowWrap} />,
    nextArrow: <NextArrow styleArrowWrap={styleArrowWrap} />,
  };

  return (
    <div className="homepage">
      <Headers />
      <div className="homepage__slider" style={{ marginBottom: "-.25rem" }}>
        <Slider {...settings}>
          <div>
            <img
              width={"100%"}
              src={"https://www.leoasher.dev/static/media/banner1.237a7309.png"}
            />
          </div>
          <div>
            <img
              width={"100%"}
              src={"https://www.leoasher.dev/static/media/banner2.caec085c.png"}
            />
          </div>
        </Slider>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
