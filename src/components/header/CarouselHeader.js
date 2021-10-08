import React from "react";
import Slider from "react-slick";

function CarouselHeader() {
  const settings = {
    dots: false,
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",

    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,

    nextArrow: <HeaderNextArrow />,
    prevArrow: <HeaderPrevArrow />
  };
  function HeaderNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red", 
        transform: "translate(-100%, -50%)"
        }}
        onClick={onClick}
      />
    );
  }
  function HeaderPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green",
        transform: "translate(100%, -50%)"
        }}
        onClick={onClick}
      />
    );
  }
  return (
    <Slider {...settings}>
      <div className="w-full  ">
        <p className="block ">
          <i className="fas fa-plane"></i>{" "}
          <span className="text-yellow-400">Free</span> plane shipping over{" "}
          <span className="text-yellow-400">$250</span>{" "}
        </p>
      </div>
      <div className="w-full">
        <p className="block ">
          <i className="fas fa-gift"></i> Today only! Post{" "}
          <span className="text-yellow-400">holiday</span> Flash Sale! 2 for $20
        </p>
      </div>
      <div className="w-full">
        <p className="block ">
          <i className="fas fa-dragon"> </i> Use promocode{" "}
          <span className="text-yellow-400">FOXIC</span> to get 15% discount!
        </p>
      </div>
    </Slider>
  );
}

export default CarouselHeader;
