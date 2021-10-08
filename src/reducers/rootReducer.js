import { combineReducers } from 'redux';
import Cart from './Cart';
import Posts from './Posts';
import Products from './Products';
import WishListCart from './WishListCart';
import AccountReducer from './AccountReducer';
import Comments from './Comments';

const rootReducer = combineReducers({
    Cart,
    Posts,
    Products,
    WishListCart,
    AccountReducer,
    Comments,
});

export default rootReducer;