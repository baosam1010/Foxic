import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actAddToCart, actAddToWishList, actGetCategory, actHideToast, actShowToast } from '../action';
// import { Link } from 'react-router-dom'
import productApi from '../api/productApi';
import ProductItem from '../components/ProductItem';

function ProductCategory(props) {

    const { match, onGetCategory, productsCategory, wishList, onAddToCart, onAddToWishList } = props;
    let indexName = match.url.indexOf("/category");
    let urlName = match.url.slice(indexName + 10);
    console.log("urlName:", urlName);
    console.log("productsCategory:", productsCategory);

    useEffect(() => {
        const getProducts = async () => {
            const params = {
                search: urlName
            }
            const products = await productApi.getAll(params);
            console.log("products", products);
            onGetCategory(products)
        };
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="max-w-full">
            {/* BREAD CRUM */}
            <div className="bg-gray-200 ">
                <div className="px-2 lg:px-0 max-w-7xl m-auto">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item uppercase">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item uppercase">
                                <Link to={`/Category/${urlName}`}>Category</Link>
                            </li>
                            <li className="breadcrumb-item active uppercase">
                                <Link to={`/Category/${urlName}`}>{urlName}</Link>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xl m-auto">
                <div className=" grid grid-cols-2 grid-flow-row gap-2 mx-2 md:grid-cols-3 md:gap-4 md:mx-4 lg:grid-cols-4 lg:mx-4 ">
                    {
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
                    }
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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory);
