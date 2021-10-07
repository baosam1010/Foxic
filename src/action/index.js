import * as Types from './../constants/ActionTypes';
// import { Posts } from '../constants/Products';

export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
};

export const actDeleteProductInCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product,
    }
};

export const actUpdateProductInCart = (product, quantity) => {
    return {
        type : Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
};


// action post 

export const actGetPosts = (posts) => {
    return {
        type: Types.GET_POSTS,
        posts,
    }
};

// Action WishList
export const actAddToWishList = (product, ) => {
    return {
        type: Types.ADD_TO_WISHLIST,
        product,    
    }
};
export const actDeleteProductInWishList = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_WISHLIST,
        product,
    }
};


// action account 
export const actUpdateAccount = (inforAccountChange ) => {
    return {
        type: Types.UPDATE_ACCOUNT,
        inforAccountChange,    
    }
};


