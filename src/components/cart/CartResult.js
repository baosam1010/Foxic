

function CartResult(props) {
    const {cart} = props;

    const showTotalAmount = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }
        }
        return total;
    };


    return (
        <div className="table-row w-full text-center align-middle ">
            <div className="hidden md:table-cell " ></div>
            <div className=" table-cell " ></div>
            <div className=" table-cell lg:hidden " ><strong>Total Price</strong></div>
            <div className="hidden md:table-cell ">
                <h4>
                    <strong>Total Price</strong>
                </h4>
            </div>
            <div className="border table-cell ">
                <h4>
                    <strong>{showTotalAmount(cart)}</strong>
                </h4>
            </div>
            <div className="border table-cell " colSpan="3">
                <button className="m-auto px-2 py-2 lg:flex lg:items-center font-medium rounded bg-yellow-400 hover:text-white hover:bg-black">
                    Confirm <span className="hidden lg:block">Buy Product </span>
                </button>
            </div>

        </div>
    )
}

export default CartResult;
