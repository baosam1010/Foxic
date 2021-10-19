import React from 'react'
import { Link } from 'react-router-dom';

function ModalHeader(props) {

    const { openModal, setOpenModal } = props;
    return (
        <div
            className="md:hidden fixed inset-0 bg-gray-100 bg-opacity-25 z-50">
            <div className="w-90vw sm:w-40vw h-screen  flex flex-col bg-white text-black">
                <div className="w-full flex items-center justify-center mt-10">
                    <button
                        className="px-4 py-1 rounded bg-red-500 left-0 text-lg font-medium text-white uppercase"
                        onClick={() => { setOpenModal(!openModal) }}
                    >
                        Close
                    </button>
                </div>
                <div className="w-full mt-10">
                    <ul className="mx-4  ">
                        <li className="w-full mb-2 text-lg font-medium">
                            <Link to="/" onClick={() => { setOpenModal(!openModal) }}>Home</Link>
                        </li>
                        <li className="w-full mb-2 text-lg font-medium">
                            <Link to="/accessories" onClick={() => { setOpenModal(!openModal) }}>Accessories</Link>
                        </li>
                        <li className="w-full mb-2 group ">
                            <div className="w-full flex items-center justify-between  text-lg font-medium">
                                Men
                                <i className="block group-hover:hidden fas fa-angle-right"></i>
                                <i className="hidden group-hover:block fas fa-angle-down"></i>
                            </div>
                            <ul className="hidden group-hover:block w-full ml-3 ">
                                <li className="w-ful  text-lg ">
                                    <Link to="/shoes"  onClick={() => { setOpenModal(!openModal) }}>Shoes</Link>
                                </li>
                                <li className="w-full  text-lg">
                                    <Link to="/shoes" onClick={() => { setOpenModal(!openModal) }}>Jacket</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="w-full mb-2 group ">
                            <div className="w-full flex items-center justify-between text-lg font-medium">
                                Women
                                <i className="block group-hover:hidden fas fa-angle-right"></i>
                                <i className="hidden group-hover:block fas fa-angle-down"></i>
                            </div>
                            <ul className="hidden group-hover:block w-full ml-3 ">
                                <li className="w-full  text-lg">
                                    <Link to="/shoes" onClick={() => { setOpenModal(!openModal) }}>Shoes</Link>
                                </li>
                                <li className="w-full  text-lg">
                                    <Link to="/shoes" onClick={() => { setOpenModal(!openModal) }}>Jacket</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="w-full mb-2 text-lg font-medium">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                    {/* Currency */}
                    <div className="mx-4 mb-2">
                        <select className="text-lg font-medium outline-none shadow-none">
                            <option className="text-base" checked value="usd">Usd</option>
                            <option className="text-base" value="vnd">Vnd</option>
                        </select>
                    </div>
                    {/* Languages */}
                    <div className="mx-4 mb-2">
                        <select className="text-lg font-medium outline-none shadow-none">
                            <option className="text-base" checked value="usd">English</option>
                            <option className="text-base" value="euro">Vietnamese</option>
                        </select>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ModalHeader
