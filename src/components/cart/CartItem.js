

function CartItem(props) {

    const {item,index} = props;
    // console.log("item:",item);
    const onDelete =(product)=>{
        let { onDeleteProductInCart, } = props;
        onDeleteProductInCart(product);
    };
    const onUpdateQuantity = (product, quantity)=>{
        let { onUpdateProductInCart, } = props;
        onUpdateProductInCart(product, quantity);
    }

    return (
        <tr key={item.product.id} className="text-center align-middle">
                        <td className="">{index + 1}</td>
                        <td className="flex align-middle justify-center">
                            <img className="w-20 h-20 mr-5" src={item.product.linkProduct[0]} alt={`${item.product.name} ${index}`} />
                            <div className="flex flex-col">
                                <span className="m-auto font-semibold">{item.product.name}</span>
                                <span className="m-auto">Color</span>
                            </div>
                        </td>

                        <td>
                            <span className="mr-2 text-base font-medium">{item.quantity}</span>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button 
                                    type="button" 
                                    className="btn btn-secondary"
                                    onClick={()=>onUpdateQuantity(item.product, item.quantity = item.quantity -1)}
                                >
                                    <i className="fas fa-minus"></i>
                                </button>
                                <button 
                                    type="button" 
                                    className="btn btn-secondary"
                                    onClick={()=>onUpdateQuantity(item.product, item.quantity = item.quantity + 1)}
                                >
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                        </td>
                        <td>{item.product.price}</td>
                        <td>
                            {item.product.price * item.quantity}
                        </td>
                        <td className="">
                            <button 
                                className="px-2 py-2 font-medium rounded bg-yellow-400 hover:text-white hover:bg-black"
                                onClick={()=>onDelete(item.product)}
                            >
                                <strong className="mr-2  ">
                                    Delete
                                </strong>
                                <i className="fas fa-times"></i>
                            </button>
                        </td>
                    </tr>
    )
}

export default CartItem;
