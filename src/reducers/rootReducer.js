import { combineReducers } from 'redux';
import Cart from './Cart';
import Posts from './Posts';
import Products from './Products';
import WishListCart from './WishListCart';
import AccountReducer from './AccountReducer';
import Comments from './Comments';
import User from './User';
import Loading from './Loading';
import Toast from './Toast';

const rootReducer = combineReducers({
    Cart,
    Posts,
    Products,
    WishListCart,
    AccountReducer,
    Comments,
    User,
    Loading,
    Toast,
});

export default rootReducer;