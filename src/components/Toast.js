import React from 'react';
import classNames from 'classnames';
import mesImg from './../assets/images/product-01-1.webp'

function Toast(props) {
    // console.log(props)   
    const {isOpen,setIsOpen} = props;

    function closeToast (e){
        let  event = e.target;
        if(setIsOpen){
            setIsOpen(event)
        }
    }
    return (
        <div className={classNames(isOpen  ? 'block' : 'hidden',"border-2 fixed bg-white bottom-8 left-8 w-80 flex flex-row  z-100 rounded ")} >
            <img
                className="w-20 h-20 mr-2"
                src={mesImg}
                alt="product"
            />
            <div className="relative flex flex-col h-full">
                <p className="text-xs mt-2">This is a very simple</p>
                <h3 className="text-sm font-medium my-2">
                    <a href="/" >Leather Sneakers</a>
                </h3>
                <div className="text-sm">
                    <span className="text-green-400 text-sm">3 minutes ago </span>
                    <span className="text-xs">from Aden Morako </span>
                    <i className="far fa-eye text-sm ml-2"></i>

                </div>
            </div>
            <button onClick={(e)=> closeToast(e)}  className="absolute top-0 right-0 mr-2">
                <i className="fas fa-times"></i>
            </button>
        </div>
    )
}

export default Toast
