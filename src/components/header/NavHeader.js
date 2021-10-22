import React from 'react'
import { Link } from 'react-router-dom'

function NavHeader() {
    return (
        <ul className="w flex flex-col lg:hidden text-black font-semibold">

            <li className="px-3  ">
              <Link to="/">Home</Link>
            </li>

            <li className="px-3 ">
              <Link to="/category/accessories">Accessories</Link>
            </li>

            <li className="px-3 relative group flex items-center hover:text-indigo-500 hover:cursor-pointer dropdown">
              <div className="">
                <Link to="/accessories/men" className="text-sm mr-2 hover:text-indigo-500 hover:cursor-pointer">Men</Link>
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
                <Link to="/category/women" className="text-sm mr-2 hover:text-indigo-500 hover:cursor-pointer">Women</Link>
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

            {/* <li className="px-3 ">
              <Link to="/about">About</Link>
            </li> */}
          </ul>
    )
}

export default NavHeader
