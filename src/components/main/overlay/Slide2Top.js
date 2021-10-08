import React from 'react'

function Slide2Top(props) {
    const { index, item} = props
    return (
        <div key={index} className="px-2">
                <img className="w-full object-cover" src={item} alt={`slide${index}`} />
        </div>
    );
}

export default Slide2Top
