import React from 'react'
import { Link } from 'react-router-dom'

function BreadCrum(props) {
    const {product1} =props;
    
    return (
        <div className="px-2 lg:px-0 max-w-7xl m-auto">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item ">
                <Link to={`/product/${product1.id}`}>Product</Link>
                {/* <Link to={`/`}>Product</Link> */}
              </li>
              <li className="breadcrumb-item active">
                <Link to={`/product/${product1.id}`}>{product1.name}</Link>
                {/* <Link to={`/`}>name</Link> */}
              </li>
            </ol>
          </nav>
        </div>
    )
}

export default BreadCrum
