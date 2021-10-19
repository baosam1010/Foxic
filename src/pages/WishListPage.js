import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'
import { Link, Switch, Route } from 'react-router-dom'
import { actAddToCart, actDeleteProductInWishList, actLogout, actUpdateAccount } from '../action'
import Account from '../components/wishList/Account'
import Addresses from '../components/wishList/Address'
import WishList from '../components/wishList/WishList'
function WishListPage(props) {

    const { wishList: wishCart, onAddToCart, onDeleteProductInWihList, inforAccount, onUpdateAccount, onLogout } = props;
    console.log('inforAccountWL:', inforAccount)
    const links = [
        {
            title: 'My Account',
            to:"/account",
        },
        {
            title: 'My Address',
            to:"/account/addresses",
        }
        ,
        {
            title: 'My WishList',
            to:"/account/wishlist",
        }
    ]
    const showCustomLink = (links)=>{
        let CustomLink = null;
        const {match} = props;
        // console.log("WLMatch:",match)

        CustomLink = links.map((link, index)=>{
            const {title, to} = link;
                return  (
                    <Link 
                        key={index} to={to}
                        className={classNames( to === match.url ? "bg-green-300 text-white hover:text-white hover:bg-green-300" : "" ," border-b border-l border-r w-full block pl-3 py-2 hover:bg-gray-100 hover:text-black")}
                    >
                        {title}
                    </Link>
                )
            })
        return CustomLink;
    };

    return (
        <div className="max-w-full">
            {/* BREAD CRUM */}
            <div className="bg-gray-200 ">
                <div className="max-w-7xl m-auto ">
                    <div className="px-2 lg:-mx-2 ">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item "><Link to={`/account`}>Account</Link></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl m-auto ">
                <div className="px-2 lg:-mx-2 mt-10 mb-20  grid grid-cols-12 md:gap-2 lg:gap-4 ">
                    <div  v-for="item in items" className="col-span-12 first:border-t mb-4 md:col-span-3">
                        {showCustomLink(links)}
                    </div>
                    <div className="col-span-12 md:col-span-9">
                        <Switch>
                            <Route exact path="/account">
                                <Account inforAccount={inforAccount} onLogout={onLogout} onUpdateAccount={onUpdateAccount} />
                            </Route>
                            <Route path="/account/addresses">
                                <Addresses inforAccount={inforAccount} onLogout={onLogout} onUpdateAccount={onUpdateAccount}/>
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
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1))
        },
        onDeleteProductInWihList: (product) => {
            dispatch(actDeleteProductInWishList(product))
        },
        onUpdateAccount: (inforAccountChange) => {
            dispatch(actUpdateAccount(inforAccountChange))
        }, 
        onLogout: () => {
            dispatch(actLogout())
        }
    }
}
const mapStateToProps = (state) => {
    return {
        wishList: state.WishListCart,
        inforAccount: state.AccountReducer,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WishListPage);
