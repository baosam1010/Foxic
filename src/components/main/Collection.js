import classNames from 'classnames';
import {   useState } from "react";
import ReactStars from "react-rating-stars-component";
import { actAddToCart, actAddToWishList } from '../../action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


function Collection(props) {

    const [isAddToCart, ] = useState(false);
    const [isColor, setIsColor] = useState(false);
    const [newLink, setNewLink] = useState('');
    const { setIsModal, setIsProduct } = props;


    const { onAddToCart, onAddToWishList, wishList } = props;
    const { productsList } = props;
    // console.log('whi:', wishList)


    const ratingChanged = (newRating) => {
        console.log("Stars:", newRating);
    };

    const changeLink = (e, product) => {
        // console.log('target:', e.target.getAttribute('data-link'))
        const newLink = e.target.src || e.target.getAttribute('data-link') || e.target.getAttribute('data-color');
        setNewLink(newLink);
        // console.log('target_e_left:', newLink)

    };

    const changeClothes = (product, newLink) => {
        const linkImageClothes = product.linkProduct[0];
        // console.log('test:',linkImageClothes);
        let nameProduct = product.name.toLowerCase().replace(/ /g, "-")
        if (newLink === '') {
            // console.log('vao 1')
            return (
                <Link to={`/product/${nameProduct}`}>
                    <img key={product.id} className=" transform hover:scale-105 "
                        src={linkImageClothes}
                        alt="clothes"
                    />
                </Link>
            )
        } else {
            if (newLink.includes('http://localhost:')) {
                newLink = newLink.slice(21);
            }
            if (product.linkProduct.includes(newLink) || product.linkProductColor.includes(newLink)) {
                product.newLink = newLink;
                // console.log('product1:', product);
                return (
                    <Link to={`/product/${nameProduct}`}>
                        <img key={product.id} className=" transform hover:scale-105 "
                            src={product.newLink}
                            alt="clothes"
                        />
                    </Link>
                )
            } else {

                return (
                    <Link to={`/product/${nameProduct}`}>
                        <img key={product.id} className=" transform hover:scale-105 "
                            src={linkImageClothes}
                            alt="clothes"
                        />
                    </Link>
                )
            }
        }
    };

    const miniColorRight = (product) => {
        let xhtml = null;
        if (product.linkProductColor.length === 0 || product.color.length === 0) {
            xhtml = null;
        } else {
            const colorChoose = () => {
                let colorXhtml = null;
                colorXhtml = product.linkProductColor.map((colorLink, index) => {
                    const color = product.color
                    // console.log('colorLink:', colorLink)                
                    return <li key={colorLink}
                        onMouseOver={(e) => { changeLink(e, product) }}
                        data-color={colorLink}
                        className={`mt-2 ${color[index]} rounded-full w-5 h-5 transform hover:scale-110`}
                    >
                    </li>
                })
                return colorXhtml;
            }
            xhtml = (
                <li onMouseOver={() => setIsColor(true)} onMouseLeave={() => setIsColor(false)} className=" relative flex items-center justify-center mb-2 rounded-full bg-gray-100 shadow-xl w-9 flex-wrap transform transition duration-500 ease-in-out hover:bg-gray-200">
                    <div className="w-9 h-9 rounded-full relative  transform transition duration-500 ease-in-out hover:rotate-360">
                        <i className="w-full h-full flex item-center justify-center  ">
                            <span className="w-3 h-3 bg-red-600 opacity-80 absolute rounded-full transform -translate-x-1/4 translate-y-3/4"></span>
                            <span className="w-3 h-3 bg-yellow-400 opacity-80 absolute rounded-full transform translate-x-1/4 translate-y-3/4"></span>
                            <span className="w-3 h-3 bg-blue-600 opacity-80 absolute rounded-full transform translate-y-4"></span>
                        </i>
                    </div>
                    <ul className={classNames(isColor ? "mb-2" : "mb-2 hidden")}>
                        {colorChoose()}
                    </ul>
                </li>
            )
        }
        return xhtml;
    };

    const showStatus = (product) => {
        let xhtml = null;
        const { status, discount } = product
        xhtml = (
            <div className="flex flex-col text-white leading-none text-center uppercase text-sm">
                <span className={classNames(status !== '' || status === null ? 'block' : 'hidden', "bg-pink-500 py-1 px-1  mb-2 ")}>{status}</span>
                <span className={classNames(discount !== '' || discount === null ? 'block' : 'hidden', "flex flex-col bg-green-400 py-1 px-1 mb-2 ")}>
                    -{discount}%
                    <span className="">Sale</span>
                </span>
            </div>
        )
        return xhtml
    };

    const miniProductLeft = (product,) => {
        let xhtml = null;
        xhtml = product.linkProduct.map((itemLink, index) => {
            if (itemLink === null || itemLink === undefined) {
                return xhtml = null;
            } else {
                index = index + 1;
                // console.log('itemLink_Left:', itemLink);
                return xhtml = (
                    <li key={index} className="mt-3 hover:border-red-500  ">
                        <a className="w-full h-full" href="/">
                            <img
                                className=" w-9 h-9 rounded-full border-2 border-transparent hover:border-indigo-500 "
                                src={itemLink}
                                alt={`mini${index}`}
                                onMouseOver={(e) => changeLink(e, product)}
                            // data-link={itemLink}
                            />
                        </a>
                    </li>
                )
            }
        })
        return xhtml;
    };

    const showModal = (product) => {
        if (product) {
            setIsModal(true);
            setIsProduct(product)
        }
    };

    const handleAddToCart = (product) => {
        onAddToCart(product);
    };

    const handleAddToWishList = (product) => {
        // console.log('WishList_Collection:',product)
        onAddToWishList(product);
    };

    const showCollections = (productsList, isColor, isAddToCart) => {
        let xhtml = null;
        if (productsList.length > 0) {
            xhtml = productsList.map((product) => {
                let nameProduct = product.name.toLowerCase().replace(/ /g, "-");
                let index = -1;
                function findindex(product, wishList){
                    for(let i = 0; i < wishList.length; i++){
                        if(wishList[i].id === product.id){
                            index= i; 
                            break
                        }
                    }
                    return index
                };
                index = findindex(product, wishList);
                // console.log("index:", index)
                return (
                    <div key={product.id} className="w-full h-full group mt-8">
                        <div className="relative w-full ">
                            <div className="w-full overflow-hidden ">
                                {changeClothes(product, newLink)}
                            </div>

                            {/* xem lai cho nay chua lam  (mini color ben phai)*/}
                            <div className=" absolute top-0 right-0 hidden group-hover:block">
                                <ul className="">
                                    <li onClick={() => handleAddToWishList(product)} className="flex items-center justify-center mb-2 rounded-full bg-gray-100  mt-2 w-9 h-9 transform transition duration-500 ease-in-out hover:rotate-360 hover:bg-gray-200">
                                        <i  className={classNames(index !== -1 ? "fas fa-heart" : "far fa-heart")}></i>
                                    </li>
                                    <li className="flex items-center justify-center mb-2 rounded-full bg-gray-100  w-9 h-9 transform transition duration-500 ease-in-out hover:rotate-360 hover:bg-gray-200">
                                        <button onClick={() => { showModal(product) }} >
                                            <i className="far fa-eye"></i>
                                        </button>
                                    </li>
                                    {miniColorRight(product)}

                                </ul>
                            </div>

                            {/* status */}
                            <div className=" absolute left-2 top-2 group-hover:hidden">
                                {showStatus(product)}

                            </div>

                            {/* mini Product ben trai */}
                            <div className=" absolute bottom-0 hidden group-hover:block ">
                                <ul className=" ml-2 transform ">
                                    {miniProductLeft(product)}

                                </ul>
                            </div>

                        </div>

                        {/* information product */}
                        <div className="flex flex-wrap items-center text-center justify-center">
                            <ReactStars
                                className=" w-full"
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                value={5}
                                activeColor="#ffd700"
                            />
                            <h2 className=" w-full text-sm font-normal text-gray-400">{product.brand}</h2>
                            <Link className="w-full" to={`/product/${nameProduct}`}>
                                <h3 className=" w-full mt-1 hover:text-indigo-500 ">{product.name}</h3>
                            </Link>
                            <div className="group mt-2 h-10">
                                <p className="w-full h-full flex flex-nowrap items-center  font-semibold group-hover:hidden">
                                    <span className={classNames(product.oldPrice === '' || product.oldPrice === null ? 'hidden' : 'block', "line-through mr-2 font-light text-xs ")}>${product.oldPrice}</span>
                                    <span>${product.price}</span>
                                </p>
                                <div className="w-full h-full hidden group-hover:block ">
                                    <button
                                        className=" bg-yellow-400 p-1 rounded uppercase text-indigo-500 font-semibold hover:bg-black hover:text-white"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        add to cart
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                );
            })
            return xhtml;
        }
    };

    return (
        <div className="max-w-7xl m-auto ">
            <div className="mt-20 flex flex-wrap items-center text-center ">
                <h1 className="w-full text-3xl mb-3 text-black font-semibold">Collection</h1>
                <ul className="w-full flex flex-nowrap justify-center ">
                    <li className="text-xl font-medium mx-5 text-gray-400 ">
                        <a className="activeBrand" href="/">Men</a>
                    </li>
                    <li className="text-xl font-medium mx-5 text-gray-400">
                        <a href="/">Women</a>
                    </li>
                    <li className="text-xl font-medium mx-5 text-gray-400">
                        <a href="/">Accessories</a>
                    </li>
                </ul>
            </div>
            <div className=" grid grid-cols-4 gap-8 mx-4 ">
                {/* 1 item */}
                {showCollections(productsList, isColor, isAddToCart)}

            </div>
        </div>

    )
}


const mapStateToProps = (state) => {
    return{
        wishList: state.WishListCart,

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onAddToWishList: (product) => {
            dispatch(actAddToWishList(product, ));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection);