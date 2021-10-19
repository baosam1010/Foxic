import * as Types from '../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('Account'));
var initialState = data ? data : [];

const AccountReducer =(state = initialState, action)=>{
    var {user} = action;
    // console.log('action:', inforAccountChange)
    switch(action.type){
        case Types.LOGIN:
            // state[0] = {...state[0], 
            //     ...inforAccountChange
            // }
            state.push(...user)
            localStorage.setItem('Account',JSON.stringify(state));
            return [...state];
            
        case Types.LOGOUT:
            state.splice(0,1)
            localStorage.setItem('Account',JSON.stringify(state));
            return [...state]
        default: 
            return [...state];
    }
};
export default AccountReducer;