import React from 'react'

function noteProductItem() {
    return (
        // <div>
        //     <div key={product.id} className="col-span-1 w-full h-full group mt-8">
        //         <div className="relative w-full ">
        //             <div className="w-full overflow-hidden ">
        //                 {changeClothes(product, newLink)}
        //             </div>

        //             {/* xem lai cho nay chua lam  (mini color ben phai) */}
        //             <div
        //                 onClick={() => handleAddToWishList(product)}
        //                 className="md:hidden absolute top-0 right-0 flex items-center justify-center mb-2 rounded-full bg-gray-100  mt-2 w-9 h-9 transform transition duration-500 ease-in-out hover:rotate-360 hover:bg-gray-200"
        //             >
        //                 <i
        //                     className={classNames(
        //                         index !== -1 ? "fas fa-heart" : "far fa-heart"
        //                     )}
        //                 ></i>
        //             </div>

        //             <div className=" absolute top-0 right-0 hidden md:group-hover:block">
        //                 <ul className="">
        //                     <li
        //                         onClick={() => handleAddToWishList(product)}
        //                         className="flex items-center justify-center mb-2 rounded-full bg-gray-100  mt-2 w-9 h-9 transform transition duration-500 ease-in-out hover:rotate-360 hover:bg-gray-200"
        //                     >
        //                         <i
        //                             className={classNames(
        //                                 index !== -1 ? "fas fa-heart" : "far fa-heart"
        //                             )}
        //                         ></i>
        //                     </li>
        //                     <li className="flex items-center justify-center mb-2 rounded-full bg-gray-100  w-9 h-9 transform transition duration-500 ease-in-out hover:rotate-360 hover:bg-gray-200">
        //                         <button
        //                             onClick={() => {
        //                                 showModal(product);
        //                             }}
        //                         >
        //                             <i className="far fa-eye"></i>
        //                         </button>
        //                     </li>
        //                     {miniColorRight(product)}
        //                 </ul>
        //             </div>

        //             {/* status */}
        //             <div className=" absolute left-2 top-2 group-hover:hidden">
        //                 {showStatus(product)}
        //             </div>

        //             {/* mini Product ben trai */}
        //             <div className="w-full bottom-0 relative  md:absolute   md:hidden md:group-hover:block ">
        //                 <ul className=" flex justify-evenly md:flex-col md:justify-around  md:ml-2  ">
        //                     {miniProductLeft(product)}
        //                 </ul>
        //             </div>
        //         </div>

        //         {/* information product */}
        //         <div className="flex flex-wrap items-center text-center justify-center">
        //             <ReactStars
        //                 className=" w-full"
        //                 count={5}
        //                 onChange={ratingChanged}
        //                 size={24}
        //                 value={5}
        //                 activeColor="#ffd700"
        //             />
        //             <h2 className=" w-full text-sm font-normal text-gray-400">
        //                 {product.brand}
        //             </h2>
        //             <Link className="w-full" to={`/product/${nameProduct}`}>
        //                 <h3 className=" w-full mt-1 hover:text-indigo-500 line-clamp-1">
        //                     {product.name}
        //                 </h3>
        //             </Link>
        //             <div className="group mt-2 h-10">
        //                 <p className="w-full h-full hidden md:flex flex-nowrap items-center  font-semibold group-hover:hidden">
        //                     <span
        //                         className={classNames(
        //                             product.oldPrice === "" || product.oldPrice === null
        //                                 ? "hidden"
        //                                 : "block",
        //                             "line-through mr-2 font-light text-xs "
        //                         )}
        //                     >
        //                         ${product.oldPrice}
        //                     </span>
        //                     <span>${product.price}</span>
        //                 </p>
        //                 <div className="w-full h-full md:hidden group-hover:block ">
        //                     <button
        //                         className=" bg-yellow-400 p-1 rounded uppercase text-indigo-500 font-semibold hover:bg-black hover:text-white"
        //                         onClick={() => handleAddToCart(product)}
        //                     >
        //                         add to cart
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div></div>
    )
}

export default noteProductItem
