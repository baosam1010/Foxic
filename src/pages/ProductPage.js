import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import ReactStars from "react-rating-stars-component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";
import { actAddToCart, actAddToWishList, actHideLoading, actHideToast, actShowLoading, actShowToast } from "../action";
import SizeGuide from "../components/product/SizeGuide";
import Delivery from "../components/product/Delivery";
import ContentHeaderProduct from "../components/product/ContentHeaderProduct";
import CarouselOverLay from "../components/main/overlay/CarouselOverLay";
import productApi from "../api/productApi";
import BreadCrum from "../components/product/BreadCrum";
import SlideProdutcs from "../components/product/SlideProdutcs";
import DesInformation from "../components/product/DesInformation";
import ContentProduct from "../components/product/ContentProduct";
import FooterProductPage from "../components/product/FooterProductPage";

function ProductPage(props) {
  const { onAddToCart, onLoading,onHideLoading, onAddToWishList, wishList } = props;
  const [isSizeGuide, setIsSizeGuide] = useState(false);
  const [isDelivery, setIsDelivery] = useState(false);
  const { match } = props;
  const [load, setLoad] = useState(false);
  let html = null;
  let nameUpdate = match.url.indexOf("/product");
  let urlName = match.url.slice(nameUpdate + 9);
  // console.log(urlName);
 
  useEffect(() => {
    if(load){
      onLoading();
    }else{
      onHideLoading();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[load]);

  // let quantity = useRef(num);
  const [product1, setProduct1] = useState(null);
  useEffect(() => {
    try {
      setLoad(true);
      const getProduct = async () => {
        const result = await productApi.get(urlName);
        // console.log('result:', result)
        if (result ) {
          setProduct1(result);
          setLoad(false);
        }
      };
      getProduct();
    } catch (error) {
      console.log("Fecth prodcts fail")
    }
  }, [urlName]);

  // console.log('product1:', product1);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    try {
      const getProducts = async () => {
        const result = await productApi.getAll();
        if(result) {
          setProducts(result);
        }
      };
      getProducts();
    } catch (error) {
      console.log("Fecth prodcts fail")
    };  
  }, []);
  // console.log("productsPage1111:", products)

  function handleSubmitProduct(product, quantity, color) {
    console.log("Productpage:", { product, quantity, color });
    onAddToCart(product, quantity, color);
  }

  if (product1 && products) {
    html = (
      <div className="max-w-full">
        {/* BREAD CRUM */}
        <div className="bg-gray-200 ">
          <BreadCrum product1={product1} />
        </div>

        {/* Content */}
        <div className="max-w-7xl m-auto">
          <div className="px-2">
            <ContentHeaderProduct
              product={product1}
              onAddToCart={handleSubmitProduct}
              wishList={wishList}
              onAddToWishList={onAddToWishList}
            />
          </div>
          {/* product */}
          <div className="px-2">
            <div className="grid grid-cols-12 gap-4">
              <div className=" col-span-12 lg:col-span-6">
                <CarouselOverLay
                  key={product1.name}
                  product={product1}
                />
              </div>
              <div className=" col-span-12 lg:col-span-6">

                <ContentProduct
                  product1={product1}
                  isSizeGuide={isSizeGuide}
                  setIsSizeGuide={setIsSizeGuide}
                  isDelivery={isDelivery}
                  setIsDelivery={setIsDelivery}
                  onAddToCart={onAddToCart}
                  wishList={wishList}
                  onAddToWishList={onAddToWishList}
                />
              </div>
            </div>
          </div>
        </div>

        {/* bao hanh  ho tro*/}

        <div className="hidden lg:block bg-gray-200 mt-20">
          <div className="max-w-7xl m-auto py-2">
            <ol className="flex items-center justify-between">
              <li className="">
                <i className="text-2xl mr-2 fas fa-headset"></i>
                <span className="font-semibold">24/7 Support</span>
              </li>
              <li className="">
                <span className="font-semibold">
                  {" "}
                  Use promocode FOXIC to get 15% discount!
                </span>
              </li>
              <li className="">
                <i className="text-2xl mr-2 fas fa-shipping-fast"></i>
                <span className="font-semibold">Fast Shipping</span>
              </li>
            </ol>
          </div>
        </div>

        {/* Infor Warranty  sua tai day  */}
        <DesInformation />

        {/*Slider produtcs  */}
        <div className=" max-w-7xl m-auto">
          <SlideProdutcs products={products} />
        </div>

        {/* footer buy product*/}
        <FooterProductPage
          product={product1}
          onAddToCart={onAddToCart}
        />
        <SizeGuide isSizeGuide={isSizeGuide} setIsSizeGuide={setIsSizeGuide} />
        <Delivery isDelivery={isDelivery} setIsDelivery={setIsDelivery} />
      </div>

    )
  };


  return (html)
  // return (
  // <div className="max-w-full">
  //   {/* BREAD CRUM */}
  //   <div className="bg-gray-200 ">
  //     <BreadCrum product1={product1} />
  //   </div>

  //   {/* Content */}
  //   <div className="max-w-7xl m-auto">
  //     <div className="px-2">
  //       {/* <ContentHeaderProduct product={product1} /> */}
  //     </div>
  //     {/* product */}
  //     <div className="px-2">
  //       <div className="grid grid-cols-12 gap-4">
  //         <div className=" col-span-12 lg:col-span-6">
  //           {/* <CarouselOverLay
  //             // key={product1.name}
  //             product={product1}
  //           /> */}
  //         </div>
  //         <div className=" col-span-12 lg:col-span-6">

  //           {/* <ContentProduct 
  //             product={product1} 
  //             isSizeGuide={isSizeGuide}
  //             setIsSizeGuide={setIsSizeGuide}
  //             isDelivery={isDelivery}
  //             setIsDelivery={setIsDelivery}
  //             onAddToCart={onAddToCart}

  //           /> */}

  //         </div>
  //       </div>
  //     </div>
  //   </div>

  //   {/* bao hanh  ho tro*/}

  //   <div className="hidden lg:block bg-gray-200 mt-20">
  //     <div className="max-w-7xl m-auto py-2">
  //       <ol className="flex items-center justify-between">
  //         <li className="">
  //           <i className="text-2xl mr-2 fas fa-headset"></i>
  //           <span className="font-semibold">24/7 Support</span>
  //         </li>
  //         <li className="">
  //           <span className="font-semibold">
  //             {" "}
  //             Use promocode FOXIC to get 15% discount!
  //           </span>
  //         </li>
  //         <li className="">
  //           <i className="text-2xl mr-2 fas fa-shipping-fast"></i>
  //           <span className="font-semibold">Fast Shipping</span>
  //         </li>
  //       </ol>
  //     </div>
  //   </div>

  //   {/* Infor Warratny  sua tai day  */}
  //     <DesInformation />         

  //   {/*Slider produtcs  */}
  //   <div className=" max-w-7xl m-auto">
  //     {/* <SlideProdutcs /> */}
  //   </div>

  //   {/* footer buy product*/}
  //   {/* <FooterProductPage 
  //         num={num}
  //         setNum={setNum}
  //         product={product}
  //         handleChangeInput={handleChangeInput }
  //         handleAddToCart={handleAddToCart}
  //       /> */}
  //   <SizeGuide isSizeGuide={isSizeGuide} setIsSizeGuide={setIsSizeGuide} />
  //   <Delivery isDelivery={isDelivery} setIsDelivery={setIsDelivery} />
  // </div>

  // );
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product, quantity, color) => {
      dispatch(actAddToCart(product, quantity, color));
    },
    onLoading: () => {
      dispatch((actShowLoading()));
      
    },
    onHideLoading: () => {
      dispatch(actHideLoading());

    },
    onAddToWishList: (product) => {
      dispatch(actAddToWishList(product));
      dispatch(actShowToast("Add Product WishList Sucess"))
      setTimeout(() => {
        dispatch(actHideToast(""));
      }, 1000)
    },
  };
};
const mapStateToProps = (state) => {
  return {
    Products: state.Products,
    Loading: state.Loading,
    wishList: state.WishListCart,

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
