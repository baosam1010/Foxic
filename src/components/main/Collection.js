// import classNames from "classnames";
import { useState } from "react";
import { actAddToCart, actAddToWishList, actHideToast, actShowToast } from "../../action";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import ProductItem from '../ProductItem';

function Collection(props) {
  const [isAddToCart] = useState(false);
  const [isColor] = useState(false);

  const { onAddToCart, onAddToWishList, wishList, productsList, setIsModal, setIsProduct } = props;
  
  const showCollections = (productsList, isColor, isAddToCart) => {
    let xhtml = null;
    if (productsList) {
      xhtml = productsList.map((product, i) => {
        return (
          <ProductItem 
            key={product.id}  
            product={product} 
            wishList={wishList} 
            onAddToCart={onAddToCart}
            onAddToWishList={onAddToWishList}
            setIsModal={setIsModal}
            setIsProduct={setIsProduct}

          />
          // noteProductItem.....
        );

      });
      return xhtml;
    }
  };

  return (
    <div className="max-w-7xl m-auto ">
      <div className="mt-10 md:mt-20 flex flex-wrap items-center text-center ">
        <h1 className="w-full text-3xl mb-3 text-black font-semibold">
          Collection
        </h1>
        <ul className="w-full flex flex-nowrap justify-between mx-2 md:justify-center ">
          <li className="text-xl font-medium  md:mx-5 text-gray-400 ">
            <a className="activeBrand" href="/">
              Men
            </a>
          </li>
          <li className="text-xl font-medium  md:mx-5 text-gray-400">
            <a href="/">Women</a>
          </li>
          <li className="text-xl font-medium  md:mx-5 text-gray-400">
            <a href="/">Accessories</a>
          </li>
        </ul>
      </div>
      <div className=" grid grid-cols-2 gap-2 mx-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 sm;mx-auto ">
        {/* 1 item */}
          {showCollections(productsList, isColor, isAddToCart)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    wishList: state.WishListCart,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product, quantity,color) => {
      dispatch(actAddToCart(product, quantity,color));
      dispatch(actShowToast("Add Product Cart Sucess"))
      setTimeout(()=>{
        dispatch(actHideToast(""));
      },1000)
    },
    onAddToWishList: (product) => {
      dispatch(actAddToWishList(product));
      dispatch(actShowToast("Add Product WishList Sucess"))
      setTimeout(()=>{
        dispatch(actHideToast(""));
      },1000)
    },
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
