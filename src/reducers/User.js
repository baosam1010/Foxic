import userApi from '../api/userApi';
import * as Types from './../constants/ActionTypes';
let data = JSON.parse(localStorage.getItem('Users'));
let initialState = data ? data : [];


export const FetchUsers = ()=>{
    return dispatch =>{
        return userApi.getAll().then(users =>dispatch(User(users)))
    }
}




const User = (state = initialState, action)=>{
    let index=-1;
    // const  {user} = action;
    // console.log("user Action: ", user)
    
    switch(action.type){
        case Types.SAVE_USERS:
            state.push(...action.users);
            return [...state]
            
        case Types.UPDATE_ACCOUNT:
            const {inforAccountChange}= action;
            index=findIdUser(state, inforAccountChange)
            if(index !== -1){
                // console.log(index)
                // const updateUser=userApi.put(inforAccountChange)
                // console.log('updateUser', updateUser)
                state[index]={...state[index], ...inforAccountChange}
            }
            return [...state]

        case Types.REGISTER:
             const {details} = action
             state.push(details)   
            return [...state]
        

        default: 
            return [...state];

    }

}
function findIdUser(state, inforAccountChange){
    let index = -1
    for(let i=0; i<state.length; i++){
        if(state[i].id === inforAccountChange.id){
             index =  i
            break;
        }else{
            return  index
        }

    }
    return index;
}
export default User;