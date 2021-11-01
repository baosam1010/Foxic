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
  const [search, setSearch] = useState('')

  const { products, wishListCart: listCart } = props;
  let numWishList = listCart.length;
  let num = products.length;
  const { isLogin, setIsLogin, user, Logout, isRegister, setIsRegister, handleKey } = props;
  // console.log("user1:", user)

  const openSearch = () => {
    setOpen(!open);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(search)
    handleKey(search);
    setOpen(!open);
    // setSearch('')

  };

  return (
    <div className="max-w-full text-white">
      <header className=" bg-black h-10 items-center leading-10">
        {/* social app */}
        <div className="max-w-7xl m-auto justify-between items-center flex ">
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
              <Link to="/category/accessories">Accessories</Link>
            </li>

            <li className="px-3 relative group flex items-center hover:text-indigo-500 hover:cursor-pointer dropdown">
              <div className="">
                <Link to="/category/men" className="text-sm mr-2 hover:text-indigo-500 hover:cursor-pointer">Men</Link>
                <i className="text-xs hover:text-indigo-500 fas fa-chevron-down"></i>
              </div>
              <div className="hidden  group-hover:block addBefore absolute top-0 left-0 transform translate-y-11/46 w-26 z-10 bg-white rounded border border-gray-400">
                <ul className="">
                  <li className="w-full flex items-center hover:bg-gray-400">
                    <Link className="w-full text-black text-base  px-2 py-1 hover:cursor-pointer " to="/category/shoes">
                      <span className="w-full hover:text-white"> Shoes</span>
                    </Link>
                  </li>
                  <li className="w-full flex items-center hover:bg-gray-400">
                    <Link className="w-full text-black text-base  px-2 py-1 hover:cursor-pointer " to="/category/jacket">
                      <span className="w-full hover:text-white"> Jacket</span>
                    </Link>
                  </li>
                  <li className="w-full flex items-center hover:bg-gray-400">
                    <Link className="w-full text-black text-base  px-2 py-1 hover:cursor-pointer " to="/category/t-shirt">
                      <span className="w-full hover:text-white"> T-shirt</span>
                    </Link>
                  </li>
                  <li className="w-full flex items-center hover:bg-gray-400">
                    <Link className="w-full text-black text-base  px-2 py-1 hover:cursor-pointer " to="/category/jacket">
                      <span className="w-full hover:text-white"> Jacket</span>
                    </Link>
                  </li>
                  <li className="w-full flex items-center hover:bg-gray-400">
                    <Link className="w-full text-black text-base  px-2 py-1 hover:cursor-pointer " to="/category/wallet">
                      <span className="w-full hover:text-white"> Wallet</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="px-3 relative group flex items-center hover:text-indigo-500 hover:cursor-pointer dropdown">
              <div className="">
                <Link to="/category/woman" className="text-sm mr-2 hover:text-indigo-500 hover:cursor-pointer">Woman</Link>
                <i className="text-xs hover:text-indigo-500 fas fa-chevron-down"></i>
              </div>
              <div className="hidden  group-hover:block addBefore absolute top-0 left-0 transform translate-y-11/46 w-26 z-10 bg-white rounded border border-gray-400">
                <ul className="">
                  <li className="w-full flex items-center hover:bg-gray-400 ">
                    <Link className="w-full text-black text-base  px-2 py-1  hover:cursor-pointer " to="/category/shoes">
                      <span className="w-full hover:text-white"> Shoes</span>
                    </Link>
                  </li>
                  <li className="w-full flex items-center hover:bg-gray-400 ">
                    <Link className="w-full text-black text-base  px-2 py-1  hover:cursor-pointer " to="/category/jacket">
                      <span className="w-full hover:text-white"> Jacket</span>
                    </Link>
                  </li>
                  <li className="w-full flex items-center hover:bg-gray-400 ">
                    <Link className="w-full text-black text-base  px-2 py-1  hover:cursor-pointer " to="/category/t-shirt">
                      <span className="w-full hover:text-white"> Skirt</span>
                    </Link>
                  </li>
                  <li className="w-full flex items-center hover:bg-gray-400 ">
                    <Link className="w-full text-black text-base  px-2 py-1  hover:cursor-pointer " to="/category/jacket">
                      <span className="w-full hover:text-white"> Jacket</span>
                    </Link>
                  </li>
                  <li className="w-full flex items-center hover:bg-gray-400 ">
                    <Link className="w-full text-black text-base  px-2 py-1  hover:cursor-pointer " to="/category/wallet">
                      <span className="w-full hover:text-white"> Wallet</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* <li className="px-3 ">
              <Link to="/about">About</Link>
            </li> */}
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
          "relative max-w-4xl mx-auto text-black items-center z-10 px-2 "
        )}
      >
        <div className="group w-full  absolute top-0 right-0 px-4">
          <form
            className="w-full  flex flex-nowrap items-center justify-center border-b-4 border-yellow-400 "
            onSubmit={(e) => handleSubmit(e)}>
            <input
              autoComplete="off"
              // autoFocus={false}
              type="text"
              className="flex-grow outline-none pl-3 py-3 text-lg "
              placeholder="What are you looking for?"
              name="search"
              value={search}
              onChange={(e) => { setSearch(e.target.value) }}
            />
            <div className="right-0 pl-3 pr-4 py-3/12 bg-white hover:cursor-pointer"
              onClick={openSearch}>
              <i className="text-3xl  text-black  fas fa-times "></i>
            </div>
          </form>
          <div className="hidden group-hover:block w-full relative top-0 h-32 bg-white ">
            {/* <h4 className="border-b-2 border-gray-400 my-2 pl-3 pb-2 text-base font-medium">History search</h4> */}
            <ul className="w-full h-full overflow-y-scroll">
              <li className="w-full px-4 py-1 hover:bg-gray-300 hover:cursor-pointer">men</li>
              <li className="w-full px-4 py-1 hover:bg-gray-300 hover:cursor-pointer">women</li>
              <li className="w-full px-4 py-1 hover:bg-gray-300 hover:cursor-pointer">jacket</li>
              <li className="w-full px-4 py-1 hover:bg-gray-300 hover:cursor-pointer">women</li>
              <li className="w-full px-4 py-1 hover:bg-gray-300 hover:cursor-pointer">men</li>
              <li className="w-full px-4 py-1 hover:bg-gray-300 hover:cursor-pointer">women</li>
            </ul>
          </div>
        </div>
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
const mapDispatchToProps = (dispatch, props) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
