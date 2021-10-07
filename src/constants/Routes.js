import Main from "../components/main/main";
import NotFound from "../pages/NotFound";
import CartPage from '../pages/CartPage';
import PostListPage from '../pages/PostListPage';
import PostPage from "../pages/PostPage";
import ProductPage from "../pages/ProductPage";
import WishListPage from "../pages/WishListPage";
// import WishList from "../components/wishList/WishList";
// import Addresses from "../components/wishList/Address";
// import Account from "../components/wishList/Account";


export const Routes = [
    {
        path: '/',
        exact: true,
        component: Main,
    },
    {
        path: '/cart',
        exact: false,
        component: CartPage,
    },
    {
        path: '/account',
        exact: false,
        component: WishListPage,
    },
    // {
    //     path: '/account.addresses',
    //     exact: false,
    //     component: Addresses,
    // },
    // {
    //     path: '/account/wishlist',
    //     exact: false,
    //     component: WishList,
    // },
    {
        path: '/product/:slug',
        exact: false,
        component: ({ match, }) => <ProductPage match={match}   />,
    },
    {
        path: '/ourpost/:slug',
        exact: false,
        component: ({ match }) => <PostPage match={match} />,
    },
    {
        path: '/ourpost',
        exact: false,
        component: ({ match }) => <PostListPage match={match} />,
    },    
    {
        path: '',
        exact: false,
        component: NotFound,
    },
]