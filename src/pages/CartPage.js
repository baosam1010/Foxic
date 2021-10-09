import { connect } from "react-redux";
import CartItem from "../components/cart/CartItem";
import CartResult from "../components/cart/CartResult";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { actDeleteProductInCart, actUpdateProductInCart } from "../action";

function CartPage(props) {
  const { cart } = props;
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
    <div className=" max-w-7xl my-10 mx-2 lg:mx-auto lg:m-20">
      <h2 className="mb-4 text-2xl font-semibold text-indigo-500">
        Product List
      </h2>
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
      <div
        className={classNames(
          cartNum > 0 ? "block" : "hidden",
          "table w-full border-collapse border rounded"
        )}
      >
        <div className="table-row-group">
          <div className="table-row text-center">
            <th className="hidden border lg:block text-xl font-semibold">#</th>
            <th className="border">Name</th>
            <th className="border">Quantity</th>
            <th className="hidden border lg:block">Price/Unit (USD)</th>
            <th className="hidden border lg:block">Prices</th>
            <th className="border">Delete Product</th>
          </div>

          <div className="table-row">
            {showCartItem(cart)}
            {/* <CartResult products={cart} /> */}
          </div>
          <div className="table-row">
            {showCartResult(cart)}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.Cart,
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
