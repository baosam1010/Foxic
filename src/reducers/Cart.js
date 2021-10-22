import * as Types from './../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

const Cart = (state = initialState, action) => {
    var { product, quantity, color, size } = action;
    var index = -1;
    
    switch (action.type) {
        case Types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity = state[index].quantity + quantity;
            } else {
                state.push({
                    product,
                    quantity, color, size
                });
            }
            // console.log('state_Cart_Action:', state)
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        case Types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        case Types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                if (state[index].quantity === 0) {
                    state[index].quantity = 1
                }
                else {
                    state[index].quantity = quantity;
                }
            }
            // console.log('state_Cart_Action:', state)
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        default: return [...state];
    }
};
var findProductInCart = (cart, product) => {
    let index = -1;
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}
export default Cart;



