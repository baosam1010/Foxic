

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
        <tr className="text-center align-middle ">
            <td className="hidden border lg:block" colSpan="2"></td>
            <td className="border">
                <h4>
                    <strong>Total Price</strong>
                </h4>
            </td>
            <td className="border">
                <h4>
                    <strong>{showTotalAmount(cart)}</strong>
                </h4>
            </td>
            <td className="border" colSpan="3">
                <button className="px-2 py-2 lg:flex font-medium rounded bg-yellow-400 hover:text-white hover:bg-black">
                    Confirm <span className="hidden lg:block">Buy Product </span>
                </button>
            </td>

        </tr>
    )
}

export default CartResult;
