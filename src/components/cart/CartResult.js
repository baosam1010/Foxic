

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
            <td colSpan="2"></td>
            <td>
                <h4>
                    <strong>Tổng Tiền</strong>
                </h4>
            </td>
            <td className="">
                <h4>
                    <strong>{showTotalAmount(cart)}</strong>
                </h4>
            </td>
            <td colSpan="3">
                <button className="btn btn-primary">
                    Confirm Buy Product 
                </button>
            </td>

        </tr>
    )
}

export default CartResult;
