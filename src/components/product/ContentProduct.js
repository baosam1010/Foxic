import classNames from 'classnames';
import React, {  useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ContentProduct(props) {
    const [formProduct, setFormProduct] = useState({
        quantity: 1,
        color: "defaultColor",
        size: "small",
      });

    const { onAddToCart, product1: product, setIsDelivery, setIsSizeGuide, isSizeGuide, isDelivery, onAddToWishList, wishList } = props;

    const handleAddToWishList = (product) => {
        // console.log('WishList_Collection:',product)
        onAddToWishList(product);
    };
    let index = -1;
    function findindex(product1, wishList) {
        for (let i = 0; i < wishList.length; i++) {
            if (wishList[i].id === product1.id) {
                index = i;
                break;
            }
        }
        return index;
    };
    index = findindex(product, wishList);

    const showColor = (product1) => {
        // console.log(product1)
        const { linkProduct, linkProductColor } = product1;
        let result = null;
        // console.log('productpage:', product[0]) 
        if (linkProductColor.length === 0) {
            // console.log('ContentProduct:', product1)
            result = (
                <li
                    key={linkProduct[0]}
                    onClick={(e) =>  handleChoiceColor("defaultColor", e)}
                    className="block w-12 h-16 mr-2 border-2 rounded border-indigo-600  hover:border-indigo-600 hover:cursor-pointer"
                >
                    <img className="object-cover h-full" src={linkProduct[0]} alt="color" />
                </li>
            );
        } else {
            let linkImg = [...linkProductColor];
            result = linkImg.map((item, index) => {
                return (
                    <li
                        key={index}
                        className={classNames(
                          index === 0 ? "border-indigo-600" : "",
                          "block w-12 h-16 mr-2 border-2 rounded hover:border-indigo-600 hover:cursor-pointer"
                        )}
                        // className="block w-12 h-16 mr-2 border-2 rounded hover:border-indigo-600 hover:cursor-pointer"
                        // data-color={product1.color[index].slice(3, -4)}
                        onClick={(e) =>  handleChoiceColor(product1.color[index].slice(3, -4), e)}
                    // style={{backgroundImage:`url(${item})`}}
                    >
                        <img className="object-cover h-full" src={item} alt="color" />
                    </li>
                );
            });
        }
        return result;
    };


    // const handleAddToCart = (product1, quantity) => {
    //     onAddToCart(product, quantity);
    //     setNum(1)
    // };

    // const handleChangeInput = (e) => {
    //     // console.log('number:',typeof e.target.value)
    //     setNum(e.target.value);
    // };

    useEffect(() => {
        // console.log("Re-Render 11111")
    },[formProduct]);

    function handleChangeForm(e) {
        e.preventDefault();
        // console.log("Submited !!!");
        // console.log("fomrOverlay1:",  {product, ...formProduct} );
        onAddToCart( product, 
            formProduct.quantity, 
            formProduct.color, 
            // formProduct.size
            )
    };

    const handleChoiceSize = (size, e) => {
        console.log("size:", size);
        if (e) {
            const arrLi = e.target.parentElement.children;
            for (let i = 0; i < arrLi.length; i++) {
                // console.log(`arr${i}:`, arr[i])
                if (arrLi[i].classList.value.includes('border-indigo-600')) {
                    arrLi[i].classList.remove('border-indigo-600');
                }
            }
            e.target.classList.add('border-indigo-600');
            setFormProduct({...formProduct, size})
        }
    };

    const handleChoiceColor = (color, e) => {
        // console.log(`color:`, color);
        // console.log('target:', e.target.parentElement)
        if (e) {
            const arrLi = e.target.parentElement.parentElement.children;
            // console.log("arrLi111:", arrLi)
            if (arrLi.length > 0) {
                for (let i = 0; i < arrLi.length; i++) {
                    // console.log("arrli121212", arrLi[0].classList)
                    if (arrLi[i].classList.value.includes('border-indigo-600')) {
                        arrLi[i].classList.remove('border-indigo-600');
                    }
                }
            }
            e.target.parentElement.classList.add('border-indigo-600');
            setFormProduct({...formProduct, color})
        }
            // e.target.parentElement.classList.add('border-indigo-600');

    };



    return (

        <div className="mt-4">
            {/* header product */}
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-between mr-5">
                    <h1 className="block text-4xl leading-42 px-3">$180</h1>
                    <div className="flex flex-col px-3 ">
                        <span className="line-through text-18">$210.00</span>
                        <span className="text-pink-500 text-sm leading-5 font-semibold  whitespace-nowrap">
                            You Save: $131.99 (28%)
                        </span>
                    </div>
                </div>
                <div className="hidden bg-gray-50 lg:flex items-center justify-between px-4 py-3">
                    <i className="block text-5xl  leading-4 pr-4 far fa-clock"></i>
                    <p className="block text-sm font-semibold ">
                        This product was viewed 13 times within last hour
                    </p>
                </div>
            </div>
            {/* Short description */}
            <div className="mt-5/20 mb-5/20">
                <h3 className="text-18 font-semibold leading-6 mb-1">
                    Short description
                </h3>
                <p className="mt-2 text-sm leading-6">
                    {`
                                Model is 5'9" wearing Size XS TallAnd without further ado, we give you our
                                 finest Shopify Theme FOXic! It is a subtle, complex and yet an extremely 
                                 easy to use template for anyone, who wants to create own website in ANY 
                                 area of expertise.
                                `}
                </p>
                <div className="">
                    <ul className="grid grid-cols-2 mt-2">
                        <div className="col-span-1 ">
                            <li className="">
                                <i className="text-sm leading-5  mr-2 fas fa-check"></i>
                                <span>100% Polyester</span>
                            </li>
                            <li>
                                <i className="text-sm leading-5  mr-2 mt-2/10  fas fa-check"></i>
                                <span>Lining:100% Viscose</span>
                            </li>
                        </div>
                        <div className="col-span-1">
                            <li>
                                <i className="text-sm leading-5  mr-2 fas fa-check"></i>
                                <span>Do not dry clean</span>
                            </li>
                            <li>
                                <i className="text-sm leading-5  mr-2 mt-2/10 fas fa-check"></i>
                                <span>Only non-chlorine</span>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="mt-5/20 relative">
                    <div className="border-b-4 border-gray-200 text-sm font-semibold leading-6">
                        Hurry Up! Left <span className="text-green-300 ">25</span>{" "}
                        in stock
                    </div>
                    <div className="">
                        <div className="border-b-4 border-gray-600 w-3/4 absolute bottom-0"></div>
                    </div>
                </div>
                <div className="mt-5/20 flex items-center">
                    <i className="text-xl pr-2 fas fa-box"></i>
                    <div className="text-sm leading-6">
                        Order in the next
                        <span className="font-semibold ml-2 mr-1 tracking-wider">
                            02
                        </span>
                        <span className="font-semibold mx-1 tracking-wider">
                            :
                        </span>
                        <span className="font-semibold mx-1 tracking-wider">
                            46
                        </span>
                        <span className="font-semibold mx-1 tracking-wider">
                            :
                        </span>
                        <span className="font-semibold ml-1 mr-2 tracking-wider">
                            10
                        </span>
                        to get it by Tuesday, September 08, 2020
                    </div>
                </div>
                <div className="mt-5/20">
                    <div className="bg-gray-50 ">
                        <ul className="grid grid-cols-2 px-7 pt-5/20 pb-3/12">
                            <div className="col-span-1">
                                <li className="">
                                    Availability:
                                    <span className="font-medium"> In stock</span>
                                </li>
                                <li className="">
                                    Tax Info:{" "}
                                    <span className="font-medium"> Tax included</span>
                                </li>
                                <li className="">
                                    Collection:
                                    <span className="font-medium"> Women</span>
                                </li>
                            </div>
                            <div className="col-span-1">
                                <li className="">
                                    Sku:
                                    <span className="font-medium"> FOXic-45812</span>
                                </li>
                                <li className="">
                                    Vendor: <span className="font-medium"> Banita</span>
                                </li>
                                <li className="">
                                    Barcode:{" "}
                                    <span className="font-medium"> 314363563</span>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                {/* Form buy product */}
                <div className="mt-5/20">
                    <form onSubmit={handleChangeForm}>
                        {/* choose color */}
                        <div className="flex items-center ">
                            <label className="mr-4 text-xl font-semibold">
                                Color:
                            </label>
                            <ul v-for="item in items" className="flex first:border-red-600 first:border-4  ">
                                {showColor(product)}
                            </ul>
                        </div>
                        {/* choose size */}
                        <div className="flex items-center mt-5/20">
                            <label className="block mr-4 text-xl font-semibold">
                                Size:
                            </label>
                            <ul className="flex items-center">
                                <li className="mr-4 text-base font-medium rounded border-2 px-2 py-1 border-indigo-600 hover:cursor-pointer  hover:border-indigo-600  "
                                    onClick={(e) => handleChoiceSize("small", e)}
                                >
                                    Small
                                </li>
                                <li className="mr-4 text-base font-medium rounded border-2 px-2 py-1 hover:cursor-pointer hover:border-indigo-600"
                                    onClick={(e) => handleChoiceSize("medium", e)}
                                >
                                    Medium
                                </li>
                                <li className="mr-4 text-base font-medium rounded border-2 px-2 py-1 hover:cursor-pointer hover:border-indigo-600"
                                    onClick={(e) => handleChoiceSize("large", e)}
                                >
                                    Large
                                </li>
                            </ul>
                        </div>
                        {/* choose quantity, cart, wishlist */}

                        <div className="w-full relative flex flex-between  mt-5/20">
                            <div className="flex flex-row-reverse">
                                <input
                                    className="pl-6 pr-2  py-1  w-20 text-2xl  bg-gray-200 "
                                    // type="number"
                                    name="quantity"
                                    value={formProduct.quantity}
                                    onChange={(e) => setFormProduct({...formProduct, quantity: e.target.value})}
                                />

                                <div className="flex flex-col h-full  items-center justify-center absolute mr-2">
                                    <button
                                        type="button"
                                        onClick={() => setFormProduct({...formProduct, quantity: formProduct.quantity+1 })
                                        }
                                        className="text-3xl w-6 leading-7"
                                    >
                                        +
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {setFormProduct({...formProduct, quantity: formProduct.quantity-1 });
                                            if ( formProduct.quantity <= 1) {
                                                  setFormProduct({...formProduct, quantity: 1 });
                                            }
                                        }}
                                        className="text-3xl w-6 leading-7 "
                                    >
                                        -
                                    </button>
                                </div>
                                
                            </div>
                            <div className="flex-grow">
                                <button
                                    // onClick={() => handleAddToCart(product, num)}
                                    type="submit"
                                    className="w-full uppercase  bg-green-500 text-white text-xl font-medium  py-3 mx-2 rounded hover:bg-black hover:text-white"
                                >
                                    Add To Cart
                                </button>
                            </div>
                            <div className="flex items-center mx-2">
                                <button
                                    onClick={() => handleAddToWishList(product)}
                                    className="ml-2 right-0"
                                >
                                    <i
                                        className={classNames(
                                            index !== -1 ? "fas fa-heart" : "far fa-heart","text-4xl"
                                        )}
                                    ></i>
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="mt-5/20 flex flex-row-reverse  items-center ">
                        <Link
                            to="/"
                            className="hover:text-green-300 hover:underline"
                        >
                            I agree to the terms of service
                        </Link>
                        <input className="mr-2 w-5 h-5" type="checkbox" />
                    </div>
                </div>
                <div className="mt-5/20">
                    <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <li className="">
                            <i className="mr-3 lg:mr-1 text-green-300 fas fa-ruler"></i>
                            <button
                                onClick={() => setIsSizeGuide(!isSizeGuide)}
                                className="hover:text-green-300 hover:underline"
                            >
                                Size Guide
                            </button>
                        </li>
                        <li>
                            <i className="mr-3 lg:mr-1 text-green-300 fas fa-truck"></i>
                            <button
                                onClick={() => setIsDelivery(!isDelivery)}
                                className="hover:text-green-300 hover:underline"
                            >
                                Delivery and Return
                            </button>
                        </li>
                        <li>
                            <i className="mr-3 lg:mr-1 text-green-300 fas fa-envelope"></i>
                            <button className="hover:text-green-300 hover:underline">
                                Ask about this product
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <img
                        className="hidden lg:block"
                        src='https://big-skins.com/frontend/foxic-html-demo/images/payment/safecheckout.webp'
                        alt="logoPay1"
                    />
                    <img
                        className="block lg:hidden"
                        src="https://big-skins.com/frontend/foxic-html-demo/images/payment/safecheckout-m.webp"
                        alt="logoPay2"
                    />
                </div>
            </div>
            
        </div>
    )
}

export default ContentProduct;
