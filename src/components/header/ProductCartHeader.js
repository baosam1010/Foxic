import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

function ProductCartHeader(props) {
    const {products, num } = props;



    
  const showItemCart = (products) => {
    let result = null;
    if (num > 0) {
      result = products.map((item, index) => {
        let priceProduct = item.product.price * item.quantity;
        return (
          <li
            key={item.product.id}
            className=" flex w-full bg-white pt-2 addHover hover:bg-red-500 last:pb-2"
          >
            <div className="mx-2 ">
              <img
                className="w-16 mr-2 object-cover"
                src={item.product.linkProduct[0]}
                alt={item.product.name}
              />
            </div>
            <div className="flex flex-col w-full h-full mr-2">
              <h4 className="w-full text-base font-medium text-black">
                {item.product.name}
              </h4>
              <div className="w-full flex justify-between mt-2">
                <div>
                  <span className="mr-1 text-black">Mau sac,</span>
                  <span className="text-black">{item.quantity}</span>
                </div>
                <p className="block text-black">{priceProduct}$</p>
              </div>
            </div>
            <button className="m-auto pr-2 text-black hover:text-red-500">
              Xóa
            </button>
          </li>
        );
      });
    }

    return result;
  };

    return (
        <ul className="hidden group-hover:block addBefore absolute bg-wwhite right-0 top-0 transform translate-y-18 overscroll-y-contain w-80 max-h-64  z-10">
            <div className="hidden border-1  rounded ">
                <h3 className="text-lg font-medium text-white pl-2 cursor-default  m-auto py-2 bg-yellow-400 border-b-1 border-white">
                    {num === null || num === undefined || num === 0
                        ? "Chưa Có Sản Phẩm"
                        : "Danh Sách Sản Phẩm"}
                </h3>
                <div
                    className={classNames(
                        num === undefined || num === null || num === 0
                            ? "hidden"
                            : "block",
                        " group"
                    )}
                >
                    {showItemCart(products)}
                </div>
                <Link
                    to="/cart"
                    className="w-full border-t-1 block  border-white text-indigo-500  text-center  bg-yellow-400 hover:bg-black hover:text-white"
                >
                    Xem thêm
                </Link>
            </div>
        </ul>
    )
}

export default ProductCartHeader
