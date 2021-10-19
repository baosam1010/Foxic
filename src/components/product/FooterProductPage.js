import classNames from 'classnames';
import React, { useEffect, useState } from 'react'

function FooterProductPage(props) {

    const { 
        // num, setNum,
         product, 
         handleChangeInput,
         handleAddToCart } = props;
         
    const [showFooter, setShowFooter] = useState(false);
    const [num, setNum] = useState(1);

    
    useEffect(() => {
        let lastScroll = 0;
        window.addEventListener("scroll", () => {
            // console.log(document.documentElement.scrollTop)
            let currentScroll = document.documentElement.scrollTop;
            if (currentScroll > lastScroll) {
                setShowFooter(false);
            } else if (currentScroll < lastScroll) {
                setShowFooter(true);
            };

            if (currentScroll <= 0) {
                lastScroll = 0
            } else { lastScroll = currentScroll }
        })

        return () => {

        }
    }, []);


    return (
        <div className={classNames(showFooter === true ? "block" : "hidden", "bg-gray-50 fixed bottom-0 left-0 right-0 z-10")}>
            <div className="max-w-7xl m-auto ">
                <div className="max-w-full flex justify-between mx-2 my-4">
                    <div className=" flex items-center ">
                        <img
                            className="w-12 h-16"
                            src={product[0].linkProduct[0]}
                            alt=""
                        />
                        <div className="hidden h-full lg:flex flex-col  justify-between ml-5">
                            <h2 className="block my-1 text-xl font-semibold">
                                {product[0].name}
                            </h2>
                            <div className="flex items-center my-1 ">
                                <span className="text-xl font-semibold">$200.00</span>
                                <span className="line-through text-base font-normal ml-2">
                                    {product[0].price}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200  w-3/6 lg:w-2/6 h-16">
                        <select className="bg-gray-200 w-full h-full" name="TenDanhSach">
                            <option>-- Please choose your optional --</option>
                            <option>-- It is....1 --</option>
                            <option>-- It is....2 --</option>
                        </select>
                    </div>
                    <div className="flex items-center">
                        <label className="hidden lg:block text-xl font-semibold">
                            Quantity:
                        </label>
                        <input
                            className="hidden lg:block pl-8 pr-2  py-3  w-20 text-2xl  bg-gray-200 rounded mx-1  hidArrInput"
                            type="number"
                            value={num}
                            onChange={(e) => handleChangeInput(e)}
                        />
                        <div className="hidden lg:flex flex-col justify-evenly mr-1">
                            <button
                                onClick={() => setNum(num + 1)}
                                className="text-lg w-7  bg-gray-200 rounded-full mb-1"
                            >
                                <i className="fas fa-plus"></i>
                            </button>
                            <button
                                onClick={() => {
                                    setNum(num - 1);
                                    if (num <= 1) {
                                        setNum(1);
                                    }
                                }}
                                className="text-lg w-7 bg-gray-200 rounded-full  mt-1"
                            >
                                <i className="fas fa-minus"></i>
                            </button>
                        </div>
                        <div className=" lg:flex-grow">
                            <button
                                onClick={() => handleAddToCart(...product, num)}
                                className="w-full uppercase  bg-green-500 text-white text-sm lg:text-xl font-medium  py-3 px-2 rounded hover:bg-black hover:text-white"
                            >
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterProductPage;
