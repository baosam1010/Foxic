import * as Types from '../constants/ActionTypes';


var data = JSON.parse(localStorage.getItem('WishList'));
var initialState = data ? data : [];

const WishListCart = (state = initialState, action) => {

    var index = -1;
    var { product,} = action;

    switch (action.type) {
        case Types.ADD_TO_WISHLIST:
            index = findIndex(state, product)
            if(index !== -1){
                localStorage.setItem('WishList', JSON.stringify(state));
                return [...state]
            }else {
                state.push(
                    product,
                ); 
            };
            localStorage.setItem('WishList', JSON.stringify(state));
            return [...state];

        case Types.DELETE_PRODUCT_IN_WISHLIST:
            index = findIndex(state, product)
            if(index !== -1){
                state.splice(index,1);
            };
            localStorage.setItem('WishList', JSON.stringify(state));
            return [...state];

        default: return [...state];
    }
};

function findIndex(state, product) {
    let index = -1;
    if (state.length > 0) {
        console.log("state:", state)
        console.log("product:", product)
        for (let i = 0; i < state.length; i++) {
            if (state[i].id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
};

export default WishListCart;




