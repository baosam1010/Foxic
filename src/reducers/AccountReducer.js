import * as Types from '../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('Account'));
var initialState = data ? data : [
    {
        firstName: 'Jenny',
        lastName: 'Raider',
        email: 'jennyraider@hotmail.com',
        phone: '876-432-4323',
    }
];

const AccountReducer =(state = initialState, action)=>{
    var {inforAccountChange} = action;
    // console.log('action:', inforAccountChange)
    switch(action.type){
        case Types.UPDATE_ACCOUNT:
            // console.log('state1:',state);
            state[0] = {...state[0], 
                // firstName: inforAccountChange.firstName
                ...inforAccountChange
            }
            localStorage.setItem('Account',JSON.stringify(state));
            return [...state];

        default: return [...state];
    }
};
export default AccountReducer;