import logo from './../assets/images/logo.webp';
import {Link} from 'react-router-dom';


function Footer() {
    return (
        <div className="max-w-full md:max-w-full bg-yellow-400 ">
            <div className="bg-black">
                <ul className="max-w-7xl  m-auto  text-white grid grid-cols-1 md:grid-cols-3 ">
                    <li className="flex items-center justify-center px-4 py-2 md:py-12  ">
                        <div className="mr-4 ">
                            <i className="text-5xl md:text-7xl fas fa-luggage-cart"></i>
                        </div>
                        <div>
                            <h4 className="text-base font-semibold">Extra fast delivery</h4>
                            <p className="text-sm mt-3 ">
                                Your order will be delivered 3-5 business days after all of your items are available
                            </p>
                        </div>
                    </li>
                    <li className="flex items-center justify-center px-4 py-2 md:py-12  ">
                        <div className="mr-4 ">
                            <i className="text-5xl mr-3 lg:mr-0 md:text-7xl fas fa-coins"></i>
                        </div>
                        <div>
                            <h4 className="text-base font-semibold">Best price</h4>
                            <p className="text-sm mt-3 ">
                                We'll match the product prices of key online and local competitors for immediately
                            </p>
                        </div>
                    </li>
                    <li className="flex items-center justify-center px-4 py-2 md:py-12 ">
                        <div className="mr-4 ">
                            <i className="text-5xl mr-6 lg:mr-0 md:text-7xl far fa-file-alt"></i>
                        </div>
                        <div>
                            <h4 className="text-base font-semibold">Guarantee</h4>
                            <p className="text-sm mt-3 ">
                                If the item you want is available, we can process a return and place a new order
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="max-w-full  md:max-w-7xl m-auto  grid grid-cols-2 px-2 md:grid-cols-4 pb-5 bg-yellow-400">
                <div className="mt-10">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <ul>
                        <li className="mt-2"> E-mail: Foxshop@gmail.com</li>
                        <li className="mt-2"> Hours: 10:00 - 18:00, Mon - Fri</li>
                        <li>
                            <ul className="flex mt-2">
                                <li className="px-1 text-xl hover:text-indigo-500 hover:cursor-pointer"><i className=" fab fa-facebook-f"></i></li>
                                <li className="px-1 text-xl hover:text-indigo-500 hover:cursor-pointer"><i className=" fab fa-twitter"></i></li>
                                <li className="px-1 text-xl hover:text-indigo-500 hover:cursor-pointer"><i className=" fab fa-google-plus-g"></i></li>
                                <li className="px-1 text-xl hover:text-indigo-500 hover:cursor-pointer"><i className=" fab fa-instagram"></i></li>
                                <li className="px-1 text-xl hover:text-indigo-500 hover:cursor-pointer"><i className=" fab fa-vimeo-v"></i></li>
                                <li className="px-1 text-xl hover:text-indigo-500 hover:cursor-pointer"><i className=" fab fa-linkedin-in"></i></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h4 className="text-xl font-bold leading-7 mt-2 mb-3">Information</h4>
                    <ul>
                        <li className="hover:text-indigo-500 hover:cursor-pointer">About Us</li>
                        <li className="mt-2 hover:text-indigo-500 hover:cursor-pointer">Contact Us</li>
                        <li className="mt-2 hover:text-indigo-500 hover:cursor-pointer">Terms & Conditions</li>
                        <li className="mt-2 hover:text-indigo-500 hover:cursor-pointer">Returns & Exchanges</li>
                        <li className="mt-2 hover:text-indigo-500 hover:cursor-pointer">Shipping & Delivery</li>
                    </ul>
                </div>
                <div className="mt-10 ">
                    <h4 className="text-xl font-bold leading-7 mt-2 mb-3">Account details</h4>
                    <ul>
                        <li  className="hover:text-indigo-500 hover:cursor-pointer">My Account</li>
                        <li className="mt-2 hover:text-indigo-500 hover:cursor-pointer">View Cart</li>
                        <li className="mt-2 hover:text-indigo-500 hover:cursor-pointer">My Wishlist</li>
                        <li className="mt-2 hover:text-indigo-500 hover:cursor-pointer">Order Status</li>
                        <li className="mt-2 hover:text-indigo-500 hover:cursor-pointer">Track My Order</li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h4 className="text-xl font-bold leading-7 mt-2 mb-3">Safe payments</h4>
                    <ul className="flex flex-col ">
                        <li className="text-5xl px-3 hover:text-indigo-500"><i className="fab fa-google-pay"></i></li>
                        <li className="text-5xl px-3 hover:text-indigo-500"><i className="fab fa-cc-visa"></i></li>
                        <li className="text-5xl px-3 hover:text-indigo-500"><i className="fab fa-apple-pay"></i></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Footer
