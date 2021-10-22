import { useEffect, useState } from "react";
import PostsList from "../post/PostsList";
import Banner from "./Banner";
import Brand from "./Brand";
import Collection from "./Collection";
import MainSlider from "./MainSlider";
import NewArrival from "./NewArrival";
import TrendSummer from "./TrendSummer";
import { connect } from "react-redux";
import Overlay from "./overlay/Overlay";
import { actAddToCart, actAddToWishList} from "../../action";
import LoadingGlobal from "../LoadingGlobal";
import productApi from '../../api/productApi';


function Main(props) {
  const { match, wishList, onAddToCart, onAddToWishList} = props;

  // console.log('main:',Products)
  const [isModal, setIsModal] = useState(false);
  const [isProduct, setIsProduct] = useState(null);
  const [collection, setCollection] = useState(null)
  const [arrival, setArrival] = useState(null)

  function handleSetIsModal(event) {
    if (event) {
      setIsModal(!isModal);
    }
  }

  function handleSetIsProduct(product) {
    setIsProduct(product);
  }
  const handleAddToCart = (product, quantity, color) => {
    onAddToCart(product,quantity, color );
  };
  const handleAddToWishList = (product) => {
    // console.log('WishList_Collection:',product)
    onAddToWishList(product);
  };
  
  useEffect(() => {
    const fetchCollection = async ()=>{
      const params = {
        search: 'collection'
      };
        const collection = await productApi.getAll(params);
        // console.log("collection: ",collection)
        setCollection(collection)
    };
    fetchCollection();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    const fetchArrival = async ()=>{
      const params = {
        search: 'arrival'
      };
        const arrival = await productApi.getAll(params);
        // console.log("arrival: ",arrival)
        setArrival(arrival)
    };
    fetchArrival();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div className="max-w-full mb-20">
      <MainSlider />
      <Banner />
      <Brand />
      <Collection
        productsList={collection}
        setIsModal={setIsModal}
        setIsProduct={handleSetIsProduct}
      />
      <TrendSummer />
      <NewArrival
        productsList={arrival}
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
      onAddToCart: (product, quantity, color) => {
        dispatch(actAddToCart(product, quantity,color));
      },
      onAddToWishList: (product) => {
        dispatch(actAddToWishList(product));
      },
     
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Main);
