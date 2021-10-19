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

//action Comment
export const actAddToComment = (comment ) => {
    return {
        type: Types.ADD_TO_COMMENT,
        comment,    
    }
};

// ACTION Save Users
export const actSaveUsers = (users ) => {
    return {
        type: Types.SAVE_USERS,
        users,    
    }
};

export const actRegister = (details ) => {
    return {
        type: Types.REGISTER,
        details,    
    }
};
// Login and Logout
export const actLogin = (user ) => {
    return {
        type: Types.LOGIN,
        user,    
    }
};
export const actLogout = ( ) => {
    return {
        type: Types.LOGOUT,
   
    }
};

// ACTION SHOW_LOADING
export const actShowLoading = ( ) => {
    return {
        type: Types.SHOW_LOADING,
    }
}
export const actHideLoading = ( ) => {
    return {
        type: Types.HIDE_LOADING,
    }
}

// action SHOW and HIDE Toast

export const actShowToast = (message) => {
    return {
        type: Types.SHOW_TOAST,
        message
    }
}
export const actHideToast = (message) => {
    return {
        type: Types.HIDE_TOAST,
        message,
        
    }
}




