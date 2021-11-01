import React from "react";
// import { useTranslation } from "react-i18next";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function ContentHeaderProduct(props) {
  const { product } = props;
  const ratingChanged = (newRating) => {
    console.log("StarsProduct:", newRating);
  };
  // const {t} = useTranslation();
  return (
    <div className="mt-10 mb-6">
      <div className="w-full flex items-center">
        <ReactStars
          className=" w-full "
          count={5}
          onChange={ratingChanged}
          size={24}
          value={4}
          activeColor="#ffd700"
        />
        <Link to="/product" className="underline ml-2 hover:text-green-300">
          {" "}
          (17 reviews)
        </Link>
      </div>
      <h1 className="text-2xl font-semibold leading-8 mt-2/10">
        {product.name}
        {/* {t('content.functional')} */}
      </h1>
    </div>
  );
}

export default ContentHeaderProduct;
