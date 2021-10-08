import * as Types from './../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('COMMENTS'));
var initialState= data ? data : [
    {
        id:1,
        postname:'The High-Street Brand Fashion',
        name: 'Sam Sam',
        email: 'SamSam@hmail.com',
        content: 'it is very good for me!!!',
        time: '',
        img:''
    },
    {
        id:1,
        postname:'The High-Street Brand Fashion',
        name: 'Sam Sam',
        email: 'SamSam1010@gmail.com',
        content: '!!!',
        time: '',
        img:''
    }
]

// let a = [
//     {
//         id:1,
//         postname:'The High-Street Brand Fashion',
//         nameUser: 'Sam Sam',
//         email: 'SamSam@hmail.com',
//         content: 'it is very good for me!!!',
//         time: Date.now,
//         img:''
//     },
//     {
//         id:1,
//         postname:'The High-Street Brand Fashion',
//         nameUser: 'Sam Sam',
//         email: 'SamSam1010@gmail.com',
//         content: '!!!',
//         time: Date.now,
//         img:''
//     }
// ]

const Comments = (state = initialState, action)=>{
    const {comment} = action;

        switch(action.type){
            case Types.ADD_TO_COMMENT:
                state.push(comment)
                localStorage.setItem('COMMENTS',JSON.stringify(state))
                return  [...state]
            default :
                return state;
        }
}

export default Comments;