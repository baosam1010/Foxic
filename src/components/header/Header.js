// import './../../index.css';
import classNames from "classnames";
import { useState } from "react";
import { connect } from "react-redux";
import logo from "./../../assets/images/logo.webp";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselHeader from "./CarouselHeader";
import ModalHeader from "./ModalHeader";
import Languages from "./Languages";
import Currency from "./Currency";
import AccountHeader from "./AccountHeader";
import ProductCartHeader from "./ProductCartHeader";
import ModalAccountHeader from "./ModalAccountHeader";

function Header(props) {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModalAccountHeader, setOpenModalAccountHeader] = useState(false);

  const { products, wishListCart: listCart } = props;
  let numWishList = listCart.length;
  let num = products.length;
  const { isLogin, setIsLogin, user, Logout, isRegister, setIsRegister } = props;
  // console.log("user1:", user)

  const openSearch = (e) => {
    setOpen(!open);
  };

  // const showItemCart = (products) => {
  //   let result = null;
  //   if (num > 0) {
  //     result = products.map((item, index) => {
  //       let priceProduct = item.product.price * item.quantity;
  //       return (
  //         <li
  //           key={item.product.id}
  //           className=" flex w-full bg-white pt-2 addHover hover:bg-red-500 last:pb-2"
  //         >
  //           <div className="mx-2 ">
  //             <img
  //               className="w-16 mr-2 object-cover"
  //               src={item.product.linkProduct[0]}
  //               alt={item.product.name}
  //             />
  //           </div>
  //           <div className="flex flex-col w-full h-full mr-2">
  //             <h4 className="w-full text-base font-medium text-black">
  //               {item.product.name}
  //             </h4>
  //             <div className="w-full flex justify-between mt-2">
  //               <div>
  //                 <span className="mr-1 text-black">Mau sac,</span>
  //                 <span className="text-black">{item.quantity}</span>
  //               </div>
  //               <p className="block text-black">{priceProduct}$</p>
  //             </div>
  //           </div>
  //           <button className="m-auto pr-2 text-black hover:text-red-500">
  //             Xóa
  //           </button>
  //         </li>
  //       );
  //     });
  //   }

  //   return result;
  // };


  return (
    <div className=" text-white">
      <header className=" bg-black h-10 items-center leading-10">
        {/* social app */}
        <div className="max-w-sm  md:max-w-7xl m-auto justify-between items-center flex ">
          <ul className="hidden  lg:flex ">
            <li className="px-1 text-xl hover:text-indigo-500 hover:cursor-pointer">
              <i className=" fab fa-facebook-f"></i>
            </li>
            <li className="px-1 text-xl hover:text-indigo-500 hover:cursor-pointer">
              <i className=" fab fa-twitter"></i>
            </li>
            <li className="px-1 text-xl hover:text-indigo-500 hover:cursor-pointer">
              <i className=" fab fa-google-plus-g"></i>
            </li>
            <li className="px-1 text-xl hover:text-indigo-500 hover:cursor-pointer">
              <i className=" fab fa-instagram"></i>
            </li>
            <li className="px-1 text-xl hover:text-indigo-500 hover:cursor-pointer">
              <i className=" fab fa-vimeo-v"></i>
            </li>
            <li className="px-1 text-xl hover:text-indigo-500 hover:cursor-pointer">
              <i className=" fab fa-linkedin-in"></i>
            </li>
          </ul>

          {/* slide auto */}
          <div className=" overflow-hidden h-full w-full  lg:w-96">
            <CarouselHeader />
          </div>

          {/* subMenu   */}
          <ul className="hidden lg:flex h-10 items-center r">
            <Languages />
            <Currency />
            <AccountHeader
              user={user}
              isRegister={isRegister}
              setIsRegister={setIsRegister}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              Logout={Logout}
            />
                       
          </ul>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-yellow-400 px-1 py-1 md:p-4 ">
        <div className="max-w-7xl m-auto flex items-center justify-between ">
          {/* logo */}
          <div className="flex ">
            <button
              className=" mx-2 mb-2 text-center lg:hidden"
              onClick={() => setOpenModal(!openModal)}
            >
              <i className="text-2xl fas fa-bars"></i>
            </button>
            <div className="">
              <Link to="/" className="">
                <img className="w-30" src={logo} alt="logo" />
              </Link>
            </div>
          </div>



          <ul className="hidden lg:flex text-black font-semibold">

            <li className="px-3  ">
              <Link to="/">Home</Link>
            </li>

            <li className="px-3 ">
              <Link to="/accessories">Accessories</Link>
            </li>

            <li className="px-3 relative group flex items-center hover:text-indigo-500 hover:cursor-pointer dropdown">
              <div className="">
                <span className="text-sm mr-2 hover:text-indigo-500 hover:cursor-pointer">Men</span>
                <i className="text-xs hover:text-indigo-500 fas fa-chevron-down"></i>
              </div>
              <div className="hidden  group-hover:block addBefore absolute top-0 left-0 transform translate-y-11/46 w-26 z-10 bg-white rounded border border-gray-400">
                <ul className="">
                  <li className="w-full flex items-center hover:bg-gray-400">
                    <Link className="w-full text-black text-base  px-2 py-1 hover:cursor-pointer " to="/shoes">
                      <span className="w-full hover:text-white"> Shoes</span>
                    </Link>
                  </li>
                  <li className="w-full flex items-center hover:bg-gray-400">
                    <Link className="w-full text-black text-base  px-2 py-1 hover:cursor-pointer " to="/jacket">
                      <span className="w-full hover:text-white"> Jacket</span>
                    </Link>
                  </li>
                  <li className="w-full flex items-center hover:bg-gray-400">
                    <Link className="w-full text-black text-base  px-2 py-1 hover:cursor-pointer " to="/t-shirt">
                      <span className="w-full hover:text-white"> T-shirt</span>
                    </Link>
                  </li>
                  <li className="w-full flex items-center hover:bg-gray-400">
                    <Link className="w-full text-black text-base  px-2 py-1 hover:cursor-pointer " to="/jacket">
                      <span className="w-full hover:text-white"> Jacket</span>
                    </Link>
                  </li>
                  <li className="w-full flex items-center hover:bg-gray-400">
                    <Link className="w-full text-black text-base  px-2 py-1 hover:cursor-pointer " to="/wallet">
                      <span className="w-full hover:text-white"> Wallet</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="px-3 relative group flex items-center hover:text-indigo-500 hover:cursor-pointer dropdown">
              <div className="">
                <span className="text-sm mr-2 hover:text-indigo-500 hover:cursor-pointer">Women</span>
                <i className="text-xs hover:text-indigo-500 fas fa-chevron-down"></i>
              </div>
              <div className="hidden  group-hover:block addBefore absolute top-0 left-0 transform translate-y-11/46 w-26 z-10 bg-white rounded border border-gray-400">
                <ul className="">
                  <li className="w-full flex items-center hover:bg-gray-400 ">
                    <Link className="w-full text-black text-base  px-2 py-1  hover:cursor-pointer " to="/shoes">
                      <span className="w-full hover:text-white"> Shoes</span>
                    </Link>
                  </li>
                  <li className="w-full flex items-center hover:bg-gray-400 ">
                    <Link className="w-full text-black text-base  px-2 py-1  hover:cursor-pointer " to="/jacket">
                      <span className="w-full hover:text-white"> Jacket</span>
                    </Link>
                  </li>
                  <li className="w-full flex items-center hover:bg-gray-400 ">
                    <Link className="w-full text-black text-base  px-2 py-1  hover:cursor-pointer " to="/t-shirt">
                      <span className="w-full hover:text-white"> Skirt</span>
                    </Link>
                  </li>
                  <li className="w-full flex items-center hover:bg-gray-400 ">
                    <Link className="w-full text-black text-base  px-2 py-1  hover:cursor-pointer " to="/jacket">
                      <span className="w-full hover:text-white"> Jacket</span>
                    </Link>
                  </li>
                  <li className="w-full flex items-center hover:bg-gray-400 ">
                    <Link className="w-full text-black text-base  px-2 py-1  hover:cursor-pointer " to="/wallet">
                      <span className="w-full hover:text-white"> Wallet</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="px-3 ">
              <Link to="/about">About</Link>
            </li>
          </ul>

          <ul className="flex text-black">
            <li
              className="px-2 md:px-3 hover:text-indigo-500 hover:cursor-pointer"
              onClick={openSearch}
            >
              <i className="text-2xl md:text-3xl fas fa-search"></i>
            </li>

            <li className="relative  items-center justify-center  hover:text-indigo-500 hover:cursor-pointer">
              <div className="px-2 md:px-3 text-center items-center">
                <Link to="/account/wishlist">
                  <i className="text-2xl md:text-3xl  far fa-heart"></i>
                </Link>
                <span
                  className={classNames(
                    numWishList === 0 ? "hidden" : "block",
                    "absolute text-sm  text-white text-center bottom-0  left-0 w-5 h-5 md:left-2  transform  translate-y-2  bg-black rounded-full"
                  )}
                >
                  {numWishList}
                </span>
              </div>
            </li>
            <li
              className="relative  items-center justify-center  hover:text-indigo-500 hover:cursor-pointer"
              onClick={() => { setOpenModalAccountHeader(!openModalAccountHeader) }}
            >
              <div className="px-2 lg:hidden lg:px-3 text-center items-center">
                <i className="text-2xl md:text-3xl far fa-user"></i>

              </div>
            </li>
            <li className="group relative items-center justify-center  hover:text-indigo-500 hover:cursor-pointer">
              <div className=" px-2 md:px-3">
                <Link to="/cart">
                  <i className="text-2xl md:text-3xl fas fa-shopping-cart "></i>
                </Link>
                <span
                  className={classNames(
                    num === 0 ? "hidden" : "block",
                    "absolute text-sm  text-white text-center bottom-0  left-0 w-5 h-5 md:left-2 transform   translate-y-2  bg-black rounded-full"
                  )}
                >
                  {products.length}
                </span>
              </div>
              {/* product cart header */}
              <ProductCartHeader
                products={products}
                num={num}
              />

            </li>
          </ul>
        </div>
      </nav>
      {/* input search  */}
      <div
        className={classNames(
          open ? "flex" : "hidden",
          "relative max-w-3xl m-auto mb-2 text-black  items-center z-10 px-2"
        )}
      >
        <div className="border-b-2 border-yellow-400 w-full ">
          <input
            type="text"
            className="w-full outline-none py-3 text-lg "
            placeholder="What are you looking for?"
          />
        </div>
        <i className="text-3xl ml-3 mr-4 fas fa-times " onClick={openSearch}></i>
      </div>
      {openModal && <ModalHeader
        openModal={openModal}
        setOpenModal={setOpenModal}
        user={user}
        isRegister={isRegister}
        setIsRegister={setIsRegister}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        Logout={Logout}
      />
      }
      {openModalAccountHeader && <ModalAccountHeader
        openModalAccountHeader={openModalAccountHeader}
        setOpenModalAccountHeader={setOpenModalAccountHeader}
        user={user}
        isRegister={isRegister}
        setIsRegister={setIsRegister}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        Logout={Logout}
      />
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.Cart,
    wishListCart: state.WishListCart,
  };
};

export default connect(mapStateToProps, null)(Header);
