import Slider from "react-slick";
import { useState, useEffect, useRef } from "react";
import Slide2Top from "./Slide2Top";
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";

function CarouselOverLay(props) {
  const { product } = props;
  let linkImg = null;

  if (product) {
    if (
      product.linkProductColor === null ||
      product.linkProductColor === undefined ||
      product.linkProductColor === ""
    ) {
      linkImg = [...product.linkProduct];
    } else {
      let linkImg1 = [...product.linkProduct, ...product.linkProductColor];
      linkImg = linkImg1.filter(
        (item, index) => linkImg1.indexOf(item) === index
      );
    }
  }
  // console.log("linkImg", product);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let slider1 = useRef(null);
  let slider2 = useRef(null);
  const settingArrow = {
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);

  const showSlide1 = (linkImg) => {
    let result = null;
    // let arrSlide = [...product.linkProduct, ...product.linkProductColor];
    result = linkImg.map((item, index) => {
      return (
        <div
          key={product.name}
          className="w-full h-5/6  flex items-center bg-green-300"
        >
          <img
            className="w-full object-cover"
            src={item}
            alt={`slide${index}`}
          />
        </div>
      );
    });
    return result;
  };

  const showSlide2 = (linkImg) => {
    let result = null;
    // console.log("linkImgShowSlide2:", linkImg);
    if(linkImg.length > 2) {

      result = linkImg.map((item, index) => {
        return <Slide2Top key={item}  item={item} index={index} />;
      });
    }else{
      result = null
    }
    return result;
  };
  return (
    <div className="w-full ">
      <Slider asNavFor={nav2} ref={(slider) => (slider1 = slider)} {...settingArrow}>
        {showSlide1(linkImg)}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider) => (slider2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        {...settingArrow}
      >
        {showSlide2(linkImg)}
      </Slider>
    </div>
  );
}

export default CarouselOverLay;
