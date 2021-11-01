import React from 'react'
import { connect } from 'react-redux';
import { actHideLoading } from '../action';

function LoadingGlobal(props) {
    const {isLoading} = props;
    // console.log("showLoading111", showLoading.showLoading);

    let xhtml = null;
    if(isLoading.showLoading === true){
        xhtml = (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-60 z-50">
                <div  className="w-10 h-10 rounded-full border-t-4 border-blue-600  animate-spin" >  
                </div>
            </div>
        )
    }
    return xhtml;
}
const mapStateToProps = (state) => {
    return {
        isLoading: state.Loading,
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoading: () =>{
            setTimeout(() => {
                dispatch(actHideLoading())
              }, 1500);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoadingGlobal);
