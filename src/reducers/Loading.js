import * as Types from './../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem('LOADING'));
var initialState = data ? data : {
    showLoading: false,
}


const Loading = (state = initialState, action) => {
    switch (action.type) {
        case Types.SHOW_LOADING:
            return {
                ...state,
                showLoading: true
            };
        case Types.HIDE_LOADING:
            return {
                ...state,
                showLoading: false
            };

        default:
            return state;
    }

}

export default Loading;