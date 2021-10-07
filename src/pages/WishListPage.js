import React from 'react'
import { connect } from 'react-redux'
import {Link,Switch,Route } from 'react-router-dom'
import { actAddToCart, actDeleteProductInWishList, actUpdateAccount } from '../action'
import Account from '../components/wishList/Account'
import Addresses from '../components/wishList/Address'
import WishList from '../components/wishList/WishList'
function WishListPage(props) {

    const {wishList:wishCart, onAddToCart, onDeleteProductInWihList ,inforAccount ,onUpdateAccount} = props;
    console.log('inforAccountWL:',inforAccount)

    
    return (
        <div className="max-w-full">
            {/* BREAD CRUM */}
            <div className="bg-gray-200 ">
                <div className="max-w-7xl m-auto">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item "><Link to={`/account`}>Account</Link></li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xl m-auto ">
                <div className="grid grid-cols-12 gap-4 mt-10 mb-20">  
                    <div className="col-span-3">
                        <Link className="border   w-full block pl-3 py-2 hover:bg-gray-100 hover:text-black activeList" to="/account">My Account</Link>
                        <Link className="border-b border-l border-r notFirst w-full block pl-3 py-2 hover:bg-gray-100 hover:text-black" to="/account/addresses">My Addresses</Link>
                        <Link className="border-b border-l border-r w-full block pl-3 py-2 hover:bg-gray-100 hover:text-black" to="/account/wishlist">My WishList</Link>
                    </div>
                    <div className="col-span-9">
                        <Switch>
                            <Route exact path="/account">
                                <Account inforAccount={inforAccount} onUpdateAccount={onUpdateAccount}/>
                            </Route>
                            <Route path="/account/addresses">
                                <Addresses />
                            </Route>
                            <Route path="/account/wishlist">
                                <WishList 
                                    products={wishCart} 
                                    onAddToCart={onAddToCart}  
                                    onDeleteProductInWihList={onDeleteProductInWihList}

                                />
                            </Route>
                        </Switch>
                    </div>

                </div>
            </div>

        </div>

    )
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product)=>{
            dispatch(actAddToCart(product, 1))
        },
        onDeleteProductInWihList: (product)=>{
            dispatch(actDeleteProductInWishList(product))
        },
        onUpdateAccount : (inforAccountChange)=>{
            dispatch(actUpdateAccount(inforAccountChange))
        }
    }
}
const mapStateToProps = (state) => {
    return{
        wishList: state.WishListCart,
        inforAccount : state.AccountReducer,
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (WishListPage);
