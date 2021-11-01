import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actAddToCart, actAddToWishList, actGetCategory, actHideLoading, actHideToast, actShowLoading, actShowToast } from '../action';
// import { Link } from 'react-router-dom'
import productApi from '../api/productApi';
import ProductItem from '../components/ProductItem';

function ProductCategory(props) {

    const { match, onGetCategory, productsCategory, wishList, onAddToCart, onAddToWishList, onLoading, onHideLoading } = props;
    const [load, setLoad] = useState(false);
    const [numPage, setNumPage] = useState({ page: 1, limit: 4 })
    let indexName = match.url.indexOf("/category");
    let urlName = match.url.slice(indexName + 10);
    // console.log("keyword:", keyword);
    // console.log("productsCategory:", productsCategory);
    useEffect(() => {
        if (load) {
            onLoading();
        } else {
            onHideLoading();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [load]);

    useEffect(() => {
        setLoad(true);
        const getProducts = async () => {
            if (numPage.page < 1) {
                setNumPage({ ...numPage, page: 1 })
            }
            const params = {
                ...numPage,
                search: urlName,
            }
            const products = await productApi.getAll(params);
            // console.log("products", products);
            if (products) {
                setLoad(false);
                onGetCategory(products)
            }
        };
        getProducts();
        return () => {

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [urlName, numPage])

    return (
        <div className="max-w-full">
            {/* BREAD CRUM */}
            <div className="bg-gray-200 ">
                <div className="px-2 lg:px-0 max-w-7xl m-auto">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item firstLetter">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item firstLetter">
                                <Link to={`/Category/${urlName}`}>Category</Link>
                            </li>
                            <li className="breadcrumb-item active firstLetter">
                                <Link to={`/Category/${urlName}`}>{urlName}</Link>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xl m-auto ">
                <div className=" grid grid-cols-2 grid-flow-row gap-2 mx-2 mb-10 md:grid-cols-3 md:gap-4 md:mx-4 lg:grid-cols-4 lg:mx-4 ">
                    {productsCategory.length > 0 ? (

                        productsCategory.map((product) => {
                            return (
                                <ProductItem
                                    key={product.id}
                                    product={product}
                                    wishList={wishList}
                                    onAddToCart={onAddToCart}
                                    onAddToWishList={onAddToWishList}
                                />
                            )
                        })
                    ) : (<span className="text-lg font-medium"> Don't Have Product </span>)
                    }
                </div>
            </div>
            <div className="max-w-7xl m-auto ">
                <div className="my-10">
                    <ul className="flex items-center justify-center">
                        <li
                            className={classNames(numPage.page <=1? "opacity-30 pointer-events-none":""," text-lg font-medium px-2 py-1 bg-gray-200 rounded mx-1 hover:cursor-pointer hover:bg-gray-500 hover:text-white")}
                            onClick={() => setNumPage({ ...numPage, page: numPage.page - 1 })}
                        >
                            <i className="fas fa-chevron-left"></i>
                        </li>
                        <span className="text-2xl font-medium mx-2">{numPage.page}</span>
                        {/* <li className="text-lg font-medium px-2 py-1 bg-gray-200 rounded mx-1 hover:cursor-pointer hover:bg-gray-500 hover:text-white">1</li>
                        <li className="text-lg font-medium px-2 py-1 bg-gray-200 rounded mx-1 hover:cursor-pointer hover:bg-gray-500 hover:text-white">2</li>
                        <li className="text-lg font-medium px-2 py-1 bg-gray-200 rounded mx-1 hover:cursor-pointer hover:bg-gray-500 hover:text-white">3</li>
                        <li className="text-lg font-medium px-2 py-1 bg-gray-200 rounded mx-1 hover:cursor-pointer hover:bg-gray-500 hover:text-white">4</li>
                        <li className="text-lg font-medium px-2 py-1 bg-gray-200 rounded mx-1 hover:cursor-pointer hover:bg-gray-500 hover:text-white">...</li> */}
                        <li
                            className="text-lg font-medium px-2 py-1 bg-gray-200 rounded mx-1 hover:cursor-pointer hover:bg-gray-500 hover:text-white"
                            onClick={() => setNumPage({ ...numPage, page: numPage.page + 1 })}
                        >
                            <i className="fas fa-chevron-right"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        productsCategory: state.Category,
        wishList: state.WishListCart,
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetCategory: (products) => {
            dispatch(actGetCategory(products))
        },
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
            dispatch(actShowToast("Add Product Cart Sucess"))
            setTimeout(() => {
                dispatch(actHideToast(""));
            }, 1000)
        },
        onAddToWishList: (product) => {
            dispatch(actAddToWishList(product));
            dispatch(actShowToast("Add Product WishList Sucess"))
            setTimeout(() => {
                dispatch(actHideToast(""));
            }, 1000)
        },
        onLoading: () => {
            dispatch((actShowLoading()));

        },
        onHideLoading: () => {
            dispatch(actHideLoading());

        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory);
