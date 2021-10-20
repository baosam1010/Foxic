import * as Types from './../constants/ActionTypes';

let data = JSON.parse(localStorage.getItem('Category'));
let initialState = data ? data : [];

const User = (state = initialState, action)=>{
    switch(action.type){

        case Types.GET_CATEGORY:
            state.splice(0, state.length);
            state.push(...action.products);
            localStorage.setItem('Category', JSON.stringify(state));
            return [...state]
  
        default: 
            return [...state];

    }

}

export default User;