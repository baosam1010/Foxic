// import './../../index.css';
import classNames from 'classnames';
import { useState } from 'react';
import { connect } from 'react-redux';
import logo from './../../assets/images/logo.webp';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselHeader from './CarouselHeader';


function Header(props) {

    const [open, setOpen] = useState(false);
    const { products, wishListCart: listCart } = props;
    let numWishList = listCart.length;
    let num = products.length;
    const { isLogin, setIsLogin, user, Logout, isRegister, setIsRegister } = props;

    // const settings = {
    //     dots: false,
    //     infinite: true,

    //     slidesToShow: 1,
    //     slidesToScroll: 1,

    //     autoplay: true,
    //     speed: 1000,
    //     autoplaySpeed: 3000,
    //     cssEase: "linear",

    //     vertical: true,
    //     verticalSwiping: true,
    //     swipeToSlide: true,
    // };

    const openSearch = (e) => {
        setOpen(!open)
    };



    const showItemCart = (products) => {
        let result = null;
        if (num > 0) {
            result = products.map((item, index) => {
                let priceProduct = item.product.price * item.quantity;
                return (
                    <li key={item.product.id} className=" flex w-full bg-white pt-2 addHover hover:bg-red-500 last:pb-2">
                        <div className="mx-2 ">
                            <img className="w-16 mr-2 object-cover" src={item.product.linkProduct[0]} alt={item.product.name} />
                        </div>
                        <div className="flex flex-col w-full h-full mr-2">
                            <h4 className="w-full text-base font-medium text-black">{item.product.name}</h4>
                            <div className="w-full flex justify-between mt-2">
                                <div >
                                    <span className="mr-1 text-black">Mau sac,</span>
                                    <span className="text-black">{item.quantity}</span>
                                </div>
                                <p className="block text-black">{priceProduct}$</p>
                            </div>
                        </div>
                        <button className="m-auto pr-2 text-black hover:text-red-500">Xóa</button>
                    </li>
                )
            })
        }

        return result;
    }

    return (
        <div className=" text-white">
            <header className=" bg-black h-10 items-center leading-10">
                <div className="max-w-7xl m-auto justify-between items-center flex ">
                    <ul className="flex">
                        <li className="px-1 text-xl hover:text-indigo-500 hover:cursor-pointer"><i className=" fab fa-facebook-f"></i></li>
                        <li className="px-1 text-xl hover:text-indigo-500 hover:cursor-pointer"><i className=" fab fa-twitter"></i></li>
                        <li className="px-1 text-xl hover:text-indigo-500 hover:cursor-pointer"><i className=" fab fa-google-plus-g"></i></li>
                        <li className="px-1 text-xl hover:text-indigo-500 hover:cursor-pointer"><i className=" fab fa-instagram"></i></li>
                        <li className="px-1 text-xl hover:text-indigo-500 hover:cursor-pointer"><i className=" fab fa-vimeo-v"></i></li>
                        <li className="px-1 text-xl hover:text-indigo-500 hover:cursor-pointer"><i className=" fab fa-linkedin-in"></i></li>
                    </ul>

                    {/* slide auto */}
                    <div className=" overflow-hidden h-full w-96">
                        <CarouselHeader />
                        {/* <Slider {...settings}>
                            <div className="w-full  "  >
                                <p className="block "><i className="fas fa-plane"></i> <span className="text-yellow-400">Free</span> plane shipping over <span className="text-yellow-400">$250</span> </p>
                            </div>
                            <div className="w-full"  >
                                <p className="block "><i className="fas fa-gift"></i> Today only! Post <span className="text-yellow-400">holiday</span> Flash Sale! 2 for $20</p>
                            </div>
                            <div className="w-full" >
                                <p className="block "><i className="fas fa-dragon"> </i> Use promocode <span className="text-yellow-400">FOXIC</span> to get 15% discount!</p>
                            </div>

                        </Slider> */}
                    </div>





                    {/* subMenu   */}
                    <ul className="flex h-10 items-center">
                        <li className="px-3 flex items-center hover:text-indigo-500 hover:cursor-pointer dropdown">
                            <div className=" relative flex" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="text-sm transform -translate-y-0.5 mr-1">English</span>
                                <i className="text-xs fas fa-chevron-down"></i>
                            </div>
                            <ul className="dropdown-menu reshow" aria-labelledby="dropdownMenuButton1">
                                <li><Link className="dropdown-item" to="/English">English</Link></li>
                                <li><Link className="dropdown-item" to="/Spanish">Spanish</Link></li>
                                <li><Link className="dropdown-item" to="/Germany">Germany</Link></li>
                                <li><Link className="dropdown-item" to="/French">French</Link></li>
                            </ul>
                        </li>
                        <li className="px-3 flex items-center hover:text-indigo-500 hover:cursor-pointer dropdown">
                            <div className=" relative flex flex-nowrap" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="text-sm transform -translate-y-0.5 mr-1">US dollars</span>
                                <i className="text-xs fas fa-chevron-down"></i>
                            </div>
                            <ul className="dropdown-menu reshow" aria-labelledby="dropdownMenuButton1">
                                <li><Link className="dropdown-item" to="/Eruo">Eruo</Link></li>
                                <li><Link className="dropdown-item" to="/UK">UK pounds</Link></li>
                            </ul>
                        </li>
                        <li className="relative group px-3 flex items-center  ">
                            <div className="">
                                <i className="pr-2 far fa-user"></i>
                                <Link to='/account'>
                                    {user.name !== '' ? (
                                        <span className="text-sm mr-2 hover:text-indigo-500 hover:cursor-pointer">{user.name}</span>) : (
                                        <span className="text-sm mr-2 hover:text-indigo-500 hover:cursor-pointer">Account</span>)}
                                </Link>
                            </div>
                            <div className="hidden group-hover:block absolute top-0 right-0 transform translate-y-10 w-full z-10 bg-white rounded border border-gray-400">
                                <ul className="w-full group">
                                    <li className={classNames(user.email !== "" ? 'hidden' : 'block', "w-full flex items-center hover:bg-gray-400  ")}>
                                        <span onClick={() => setIsRegister(!isRegister)} className="w-full text-black text-base text-center px-2 py-1 hover:cursor-pointer">Register</span>
                                    </li>
                                    <li className={classNames(user.email !== "" ? 'hidden' : 'block', "w-full flex items-center hover:bg-gray-400  ")}>
                                        <span onClick={() => setIsLogin(!isLogin)} className="w-full text-black text-base text-center px-2 py-1 hover:cursor-pointer">Login</span>
                                    </li>
                                    <li className={classNames(user.email !== "" ? 'block' : 'hidden', "w-full flex items-center hover:bg-gray-400")}>
                                        <span onClick={() => Logout(Logout)} className="w-full text-black text-base text-center px-2 py-1 hover:cursor-pointer">Logout</span>
                                    </li>
                                </ul>
                            </div>
                        </li>

                    </ul>
                </div>
            </header>

            {/* Navigation */}
            <nav className="bg-yellow-400 px-4 py-4 ">
                <div className="max-w-7xl m-auto flex items-center justify-between ">
                    <div className="">
                        <Link to="/" className="">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <ul className="flex text-black font-semibold">
                        <li className="px-3  text-indigo-500"><Link to="/">Home</Link></li>
                        <li className="px-3 "><Link to="/accessories">Accessories</Link></li>
                        <li className="px-3  flex items-center hover:text-indigo-500 hover:cursor-pointer dropdown">
                            <div className=" relative" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="text-sm transform -translate-y-0.5 mr-1">Men</span>
                                <i className="text-xs fas fa-chevron-down"></i>
                            </div>
                            <ul className="dropdown-menu reshow2" aria-labelledby="dropdownMenuButton1">
                                <li><Link className="dropdown-item" to="/shoes">Shoes</Link></li>
                                <li><Link className="dropdown-item" to="/jacket">Jacket</Link></li>
                                <li><Link className="dropdown-item" to="/t-shirt">T-shirt</Link></li>
                                <li><Link className="dropdown-item" to="/jacket">Jacket</Link></li>
                                <li><Link className="dropdown-item" to="/wallet">Wallet</Link></li>
                            </ul>
                        </li>
                        <li className="px-3  flex items-center hover:text-indigo-500 hover:cursor-pointer dropdown">
                            <div className=" relative" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="text-sm transform -translate-y-0.5 mr-1">Women</span>
                                <i className="text-xs fas fa-chevron-down"></i>
                            </div>
                            <ul className="dropdown-menu reshow2" aria-labelledby="dropdownMenuButton1">
                                <li><Link className="dropdown-item" to="/shoes">Shoes</Link></li>
                                <li><Link className="dropdown-item" to="/shoes">Dress</Link></li>
                                <li><Link className="dropdown-item" to="/jacket">Jacket</Link></li>
                                <li><Link className="dropdown-item" to="/skirt">Skirt</Link></li>
                            </ul>
                        </li>
                        <li className="px-3 "><Link to="/about">About</Link></li>
                    </ul>

                    <ul className="flex text-black" >
                        <li className="px-3 hover:text-indigo-500 hover:cursor-pointer" onClick={openSearch}>
                            <i className="text-3xl fas fa-search"></i>
                        </li>

                        <li className="relative  items-center justify-center  hover:text-indigo-500 hover:cursor-pointer">
                            <div className="px-3 text-center items-center">
                                <Link to="/account/wishlist">
                                    <i className="text-3xl  far fa-heart"></i>
                                </Link>
                                <span className={classNames(numWishList === 0 ? 'hidden' : 'block', "absolute bottom-0 left-2 transform  translate-y-2 badge bg-black rounded-full")}>
                                    {numWishList}
                                </span>
                            </div>
                        </li>
                        <li
                            className="group relative items-center justify-center  hover:text-indigo-500 hover:cursor-pointer"
                        >
                            <div className=" px-3">
                                <Link to='/cart'>
                                    <i
                                        className="text-3xl fas fa-shopping-cart "
                                    ></i>
                                </Link>
                                <span className={classNames(num === 0 ? "hidden" : "block", "absolute bottom-0 left-2 transform  translate-y-2 badge bg-black rounded-full")}>
                                    {products.length}
                                </span>
                            </div>
                            <ul className="hidden group-hover:block addBefore absolute bg-wwhite right-0 top-0 transform translate-y-18 overscroll-y-contain w-80 max-h-64  z-10"
                            >
                                <div className=" border-1  rounded ">
                                    <h3 className="text-lg font-medium text-white pl-2 cursor-default  m-auto py-2 bg-yellow-400 border-b-1 border-white">
                                        {num === null || num === undefined || num === 0 ? 'Chưa Có Sản Phẩm' : 'Danh Sách Sản Phẩm'}
                                    </h3>
                                    <div className={classNames(num === undefined || num === null || num === 0 ? 'hidden' : 'block', " group")}>
                                        {showItemCart(products)}
                                    </div>
                                    <Link to="/cart" className="w-full border-t-1 block  border-white text-indigo-500  text-center  bg-yellow-400 hover:bg-black hover:text-white">Xem thêm</Link>
                                </div>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* input search  */}
            <div className={classNames(open ? "flex" : "hidden", "relative max-w-3xl m-auto mb-2 text-black  items-center z-10 ")}>
                <div className="border-b-2 border-yellow-400 w-full  ">
                    <input type="text" className="w-full outline-none py-3 text-lg" placeholder="What are you looking for?" />
                </div>
                <i className="text-3xl ml-3 fas fa-times " onClick={openSearch}></i>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.Cart,
        wishListCart: state.WishListCart
    }
}

export default connect(mapStateToProps, null)(Header);
