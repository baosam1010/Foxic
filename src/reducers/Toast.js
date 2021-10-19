import * as Types from './../constants/ActionTypes'
var data = JSON.parse(localStorage.getItem('TOAST'));
var initialState = data ? data : { showToast: false, message: '' };

const Toast = (state = initialState, action) => {
    switch (action.type) {
        case Types.SHOW_TOAST:
            const {message}= action
            return {
                ...state,
                message,
                showToast: true,
            }
        case Types.HIDE_TOAST:
            return {
                ...state,
                message:'',
                showToast: false,
            }
        default:
            return state;
    }
};

export default Toast;