import { connect } from "react-redux";
import CartItem from "../components/cart/CartItem";
import CartResult from "../components/cart/CartResult";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { actDeleteProductInCart, actUpdateProductInCart } from "../action";

function CartPage(props) {
  const { cart, inforAccount } = props;
  console.log("inforAccount1245:", inforAccount)
  const cartNum = cart.length;

  const showCartItem = (cart) => {
    const { onDeleteProductInCart, onUpdateProductInCart } = props;
    let result = null;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={item.product.id}
            item={item}
            index={index}
            onDeleteProductInCart={onDeleteProductInCart}
            onUpdateProductInCart={onUpdateProductInCart}
          />
        );
      });
    }
    return result;
  };

  const showCartResult = (cart) => {
    let result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };

  return (
    <div className="max-w-full my-10 px-2 md:mx-auto lg:max-w-7xl ">
      <h2 className="mb-4 text-2xl mt-10 lg:mt-20 font-semibold text-indigo-500">
        Product List
      </h2>
      {inforAccount.length > 0 ? (
        <div className="mb-4">
          <h3
            className={classNames(
              cartNum > 0 ? "hidden" : "block",
              "text-lg font-medium  mb-2"
            )}
          >
            No product in your Cart!!!
          </h3>
          <Link
            to="/"
            className="px-2 py-2 font-medium rounded bg-yellow-400 hover:text-white hover:bg-black"
          >
            Add Product!!!
          </Link>
        </div>
      ): <span className="text-lg font-medium">Please Login to continue</span>
      
      }


      <div
        className={classNames(
          cartNum > 0 ? "block" : "hidden",
          "table w-full  border-collapse border rounded"
        )}
      >
        <div className="table-row-group">
          <div className="table-row text-center">
            <div className="hidden md:table-cell border text-lg font-medium">STT</div>
            <div className="table-cell border text-lg font-medium">Name</div>
            <div className="table-cell border text-lg font-medium">Quantity</div>
            <div className="hidden md:table-cell border text-lg font-medium">Price/Unit (USD)</div>
            <div className="table-cell border text-lg font-medium">Prices</div>
            <div className="table-cell border text-lg font-medium">Delete Product</div>
          </div>

          {showCartItem(cart)}

          {showCartResult(cart)}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.Cart,
    inforAccount: state.AccountReducer
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: (product) => {
      dispatch(actDeleteProductInCart(product));
    },
    onUpdateProductInCart: (product, quantity) => {
      dispatch(actUpdateProductInCart(product, quantity));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
