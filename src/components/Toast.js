import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { actHideToast } from '../action';

function Toast(props) {
    // console.log(props)   
    const {isToast, onHideToast} = props;
    console.log("isToast:", isToast.showToast)
    function closeToast (e){
        if(e){
            onHideToast('')
        }
    }
    return (
        <div className={classNames(isToast.showToast === true  ? 'block' : 'hidden',"fixed bottom-16 left-8 w-80 bg-green-300 flex flex-row  z-40 rounded ")} >

            <div className="text-center  h-full">
                <p className="text-lg mt-2 mr-2 pl-2 pb-2 text-white">{isToast.message}</p>
            </div>
            <button onClick={(e)=> closeToast(e)}  className="absolute top-0 right-0 mr-2">
                <i className="fas fa-times"></i>
            </button>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
            isToast: state.Toast
    }
};
const mapDispatchToProps = (dispatch, props)=>{
    return {
        onHideToast : (message)=>{
            dispatch(actHideToast(message))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Toast)
