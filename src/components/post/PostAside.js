import React from 'react'
import { Link } from 'react-router-dom'
import blogfashion2 from './../../assets/images/blog-fashion-02.webp';

function PostAside() {
    return (
        <div className="col-span-2 ">
            {/* popular aside */}
            <div className="mt-7">
                <h2 className="uppercase mb-3 leading-4 text-base font-semibold">POPULAR TAGS</h2>
                <ul>
                    <li className="btn mr-1 mb-1 text-sm bg-gray-100 hover:bg-green-300 hover:text-white">
                        <Link to="/jeans">JEANS</Link>
                    </li>
                    <li className="btn mr-1 mb-1 text-sm bg-gray-100 hover:bg-green-300 hover:text-white">
                        <Link to="/hand bags">HAND BAGS</Link>
                    </li>
                    <li className="btn mr-1 mb-1 text-sm bg-gray-100 hover:bg-green-300 hover:text-white">
                        <Link to="/fift card">GIFT CARD</Link>
                    </li>
                    <li className="btn mr-1 mb-1 text-sm bg-gray-100 hover:bg-green-300 hover:text-white">
                        <Link to="/goodwin">GOODWIN</Link>
                    </li>
                    <li className="btn mr-1 mb-1 text-sm bg-gray-100 hover:bg-green-300 hover:text-white">
                        <Link to="/seiko">SEIKO</Link>
                    </li>
                    <li className="btn mr-1 mb-1 text-sm bg-gray-100 hover:bg-green-300 hover:text-white">
                        <Link to="/banita">BANITA</Link>
                    </li>
                    <li className="btn mr-1 mb-1 text-sm bg-gray-100 hover:bg-green-300 hover:text-white">
                        <Link to="/foxic">FOXIC</Link>
                    </li>
                </ul>
            </div>

            {/* Post aside */}
            <div className="mt-7">
                <h2 className="uppercase mb-3 leading-4 text-base font-semibold">POPULAR Posts</h2>
                <div className="w-full">
                    <Link to="/" className="">
                        <img className="" src={blogfashion2} alt="example" />
                    </Link>
                    <div className="mt-3 w-full flex text-xs text-gray-400">
                        <div className="">
                            <i className="mr-1 far fa-calendar-alt"></i>
                            <span>August 27, 2020</span>
                        </div>
                        <span className="block">by Jon Cock</span>
                    </div>
                    <h4 className="mt-1">
                        <Link className="text-base font-semibold" to="/">FOXic shopify theme</Link>
                    </h4>
                    <Link to="/" className="mt-1 text-sm text-green-300">
                        <i className="mr-1 far fa-comment-dots"></i>
                        <span>15 comments</span>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default PostAside
