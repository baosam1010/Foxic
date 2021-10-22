// import Product from './../../constants/Products'
import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import CarouselOverLay from "./CarouselOverLay";
import FormOverlay from "./FormOverlay";

function Overlay(props) {
  const {
    isModal,
    setIsModal,
    isProduct,
    wishList,
    onAddToCart,
    onAddToWishList,
  } = props;

  // let name = null;
  // console.log("wishList11111:", wishList);
  // if (isProduct) {
    // name = isProduct.name.toLowerCase().replace(/ /g, "-");
  // }

  function showCarousel(product) {
    // console.log("product_showcarousel1:", product);
    let xhtml = null;
    if (product) {
      xhtml = <CarouselOverLay key={product.name} product={product} />;
    }
    return xhtml;
  }

  // -----------right-------------
  function showInfomarion(product) {
    let xhtml = null;
    if (product) {

      xhtml = (
       <div className="px-1">
          <div className="pr-4 py-7">
          <h1 className=" text-3xl font-semibold ">{product.name}</h1>
          <div className="flex flex-row items-center mt-2">
            <span className="text-3xl font-semibold mr-2">
              ${product.price}
            </span>
            {/* <div className={classNames(product.oldPrice !== null || product.oldPrice !== '' ? 'hidden' : 'block')}> */}
            <div className="flex flex-col">
              <span className="line-through">$200</span>
              <span className="text-pink-600">You Save: $20 (10%)</span>
            </div>
          </div>
          <p className="mt-6">
            {`Model is 5'9" wearing Size XS TallAnd without further ado, 
                            we give you our finest Shopify Theme FOXic! It is a subtle, 
                            complex and yet an extremely easy to use template for anyone, 
                            who wants to create own website in ANY area of expertise.`}
          </p>
          <ul className="grid grid-cols-2 mt-2">
            <li>
              <i className="mt-2 fas fa-check"></i> 100% Polyester
            </li>
            <li>
              <i className="mt-2 fas fa-check"></i> Lining:100% Viscose
            </li>
            <li>
              <i className="mt-2 fas fa-check"></i> Do not dry clean
            </li>
            <li>
              <i className="mt-2 fas fa-check"></i> Only non-chlorine
            </li>
          </ul>
          <FormOverlay
            product={product}
            onAddToCart={onAddToCart}
            onAddToWishList={onAddToWishList}
            wishList={wishList}
          />
          <div className="grid grid-cols-3 mt-8">
            <div className="w-full flex items-center justify-center">
              <i className="block text-4xl mr-2  fas fa-shipping-fast"></i>
              <div className="flex flex-wrap">
                <span className="w-full font-medium">Fast</span>
                <span className="w-full font-medium">Shipping</span>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <i className="block text-4xl mr-2 fas fa-undo"></i>
              <div className="flex flex-wrap">
                <span className="w-full font-medium">Easy</span>
                <span className="w-full font-medium">Return</span>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <i className="block text-4xl mr-2 fas fa-headset"></i>
              <div className="flex flex-wrap">
                <span className="w-full font-medium">24/7</span>
                <span className="w-full font-medium">Support</span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-nowrap  mt-8">
            {/* <Link className="w-full" to="/product">
                        </Link> */}
            <Link
              to={`/product/${product.id}`}
              className="w-full bg-gray-100 uppercase px-10 py-2 rounded font-medium hover:bg-black hover:text-white  ml-0 "
            >
              view full info
            </Link>

            <button
              className="w-full bg-gray-100 uppercase px-10 py-2 rounded font-medium hover:bg-black hover:text-white ml-2 mr-0"
              onClick={(e) => handleSetIsModal(e)}
            >
              close
            </button>
          </div>
        </div>
       </div>
      );
    }
    return xhtml;
  }

  function handleSetIsModal(e) {
    //   console.log("click");
    let event = e.target;
    setIsModal(event);
  }

  return (
    <div
      className={classNames(
        isModal ? "flex" : "hidden",
        "  fixed inset-0 bg-gray-400 bg-opacity-40 z-100 items-center justify-center "
      )}
    >
      {/* <div className={classNames( ((isModal === false || isModal === undefined || isModal === null) ? 'hidden' : 'flex'),"fixed inset-0 bg-black backdrop-filter backdrop-opacity-75 z-100 items-center justify-center ")}> */}
      <div className="bg-white rounded w-full mx-2 md:w-8/12 h-90vh  overflow-y-auto  scrollbar-hide">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1">
            {showCarousel(isProduct)}
          </div>
          <div className="col-span-2 md:col-span-1 ">
            {showInfomarion(isProduct)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
