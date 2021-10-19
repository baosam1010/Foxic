import { useState } from "react";
import PostsList from "../post/PostsList";
import Banner from "./Banner";
import Brand from "./Brand";
import Collection from "./Collection";
import MainSlider from "./MainSlider";
import NewArrival from "./NewArrival";
import TrendSummer from "./TrendSummer";
import { connect } from "react-redux";
import Overlay from "./overlay/Overlay";
import { actAddToCart, actAddToWishList } from "../../action";
import LoadingGlobal from "../LoadingGlobal";

function Main(props) {
  const { match, Products, wishList, onAddToCart, onAddToWishList } = props;
  const productsList = Products[0].productsList;
  const ProductArrival = Products[0].ProductArrival;

  const [isModal, setIsModal] = useState(false);
  const [isProduct, setIsProduct] = useState(null);

  function handleSetIsModal(event) {
    if (event) {
      setIsModal(!isModal);
    }
  }

  function handleSetIsProduct(product) {
    setIsProduct(product);
  }
  const handleAddToCart = (product) => {
    onAddToCart(product);
  };
  const handleAddToWishList = (product) => {
    // console.log('WishList_Collection:',product)
    onAddToWishList(product);
  };
  return (
    <div className="max-w-full mb-20">
      <MainSlider />
      <Banner />
      <Brand />
      <Collection
        productsList={productsList}
        setIsModal={setIsModal}
        setIsProduct={handleSetIsProduct}
      />
      <TrendSummer />
      <NewArrival
        productsList={ProductArrival}
        setIsModal={setIsModal}
        setIsProduct={handleSetIsProduct}
      />
      <PostsList match={match} />
      <Overlay
        isModal={isModal}
        setIsModal={handleSetIsModal}
        isProduct={isProduct}
        wishList={wishList}
        onAddToCart={handleAddToCart}
        onAddToWishList={handleAddToWishList}

      />
      <LoadingGlobal />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Products: state.Products,
    wishList: state.WishListCart,
  };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
      onAddToCart: (product) => {
        dispatch(actAddToCart(product, 1));
      },
      onAddToWishList: (product) => {
        dispatch(actAddToWishList(product));
      },
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Main);
