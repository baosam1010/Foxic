function CartItem(props) {
  const { item, index } = props;
  // console.log("item:",item);
  const onDelete = (product) => {
    let { onDeleteProductInCart } = props;
    onDeleteProductInCart(product);
  };
  const onUpdateQuantity = (product, quantity) => {
    let { onUpdateProductInCart } = props;
    onUpdateProductInCart(product, quantity);
  };

  return (
    <div key={item.product.id} className=" table-row w-full text-center align-middle">
      <div className="hidden md:table-cell border ">{index + 1}</div>
      <div className="table-cell border ">
        <div className="flex flex-col  lg:justify-between align-middle justify-center">
          <img
            className="block w-20 h-20 m-auto lg:mr-5"
            src={item.product.linkProduct[0]}
            alt={`${item.product.name} ${index}`}
          />
          <div className=" flex flex-col">
            <span className="m-auto font-semibold">{item.product.name}</span>
            <span className="w-full m-auto">Color</span>
          </div>
        </div>
      </div>

      <div className="table-cell  border">
        <div className="flex flex-row items-center justify-center">
          <button
            type="button"
            className="px-2 py-1 bg-gray-300 hover:bg-gray-500 rounded-tl rounded-bl "
            onClick={() =>
              onUpdateQuantity(
                item.product,
                (item.quantity = item.quantity - 1)
              )
            }
          >
            <i className="fas fa-minus"></i>
          </button>
          <span className="mx-2 text-lg font-medium">{item.quantity}</span>
          <button
            type="button"
            className="px-2 py-1 bg-gray-300 hover:bg-gray-500 rounded-div rounded-br"
            onClick={() =>
              onUpdateQuantity(
                item.product,
                (item.quantity = item.quantity + 1)
              )
            }
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <span className="lg:hidden">
          {" "}
          {item.product.price * item.quantity}$
        </span>
      </div>
      <div className="hidden md:table-cell border  " >{item.product.price}</div>
      <div className="table-cell border " >{item.product.price * item.quantity}</div>
      <div className="table-cell border">
        <button
          className="m-auto px-2 py-1 lg:py-2 lg:flex lg:items-center font-medium rounded bg-yellow-400 hover:text-white hover:bg-black"
          onClick={() => onDelete(item.product)}
        >
          <strong className="mr-2 hidden lg:block  ">Delete</strong>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
