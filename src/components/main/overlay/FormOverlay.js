import classNames from 'classnames';
import React, { useState } from 'react'

function FormOverlay(props) {
    let index = -1;
    const {
        product,
        // onAddToCart, 
        onAddToWishList, 
        wishList } = props
    const [num, setNum] = useState(1);
    const [fomrOverlay, setFormOverlay] = useState({
        count: 1,
        color: "red",
        size: "small",
     });

    console.log("FormOverlay",product)
    // choose color
    function colorSelect(product) {
        let xhtml = null;
        if (
          product.linkProductColor === null ||
          product.linkProductColor === "" ||
          product.linkProductColor === undefined
        ) {
          xhtml = (
            <a
              key={product.linkProduct[0]}
              className=""
              data-img={product.linkProduct[0]}
              href="/"
            >
              <img
                className="w-20 h-20 ml-2 rounded"
                src={product.linkProduct[0]}
                alt={`product1`}
              />
            </a>
          );
        } else {
          xhtml = product.linkProductColor.map((item, i) => {
            return (
              <a key={i} className="" data-img={item} href="/">
                <img
                  className="w-20 h-20 ml-2 rounded"
                  src={item}
                  alt={`product${i}`}
                />
              </a>
            );
          });
        }
        return xhtml;
    };
    // Submit form
    function handleChangeForm (e, product) {
        e.preventDefault();
    
        console.log("FormProduct:", product);
    
        setFormOverlay({
          [e.target.name]: e.target.value,
        });
        console.log("fomrOverlay1:", {product,...fomrOverlay});
        // onAddToCart({ product, ...fomrOverlay });
    };
    // Add to Cart
    // const handleAddToCart = (product) => {
    //     onAddToCart(product);
    // };
    // Add to wishList
    const handleAddToWishList = (product) => {
        // console.log('WishList_Collection:',product)
        onAddToWishList(product);
    };
    function findindex(product, wishList) {
        for (let i = 0; i < wishList.length; i++) {
          if (wishList[i].id === product.id) {
            index = i;
            break;
          }
        }
        return index;
      }
    index = findindex(product, wishList);

    console.log('product11:', product)
    return (
        <form
            onSubmit={(e, product) => handleChangeForm(e, product)}
        >
          <div className="flex flex-nowrap items-center mt-6">
            <span>Color:</span>
            {colorSelect(product)}
          </div>
          <div className="mt-7">
            <span className="mr-2">Size:</span>
            <select
              className="bg-gray-100"
              name="size"
              value={fomrOverlay.size}
              onChange={(e) =>
                setFormOverlay({ ...fomrOverlay, size: e.target.value })
              }
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <div
            className="w-full relative flex flex-nowrap mt-5"
          >
            <div className="flex flex-row-reverse">
              <input
                className="pl-6 pr-2  py-1  w-20 text-2xl  bg-gray-200 "
                type="number"
                name="count"
                value={num}
                onChange={(e) =>
                  setFormOverlay({ ...fomrOverlay, count: e.target.value })
                }
              />
              <div className="flex flex-col h-full  items-center justify-center absolute mr-2">
                <button
                  onClick={() => setNum(num + 1)}
                  className="text-3xl w-6 leading-7"
                >
                  +
                </button>
                <button
                  className="text-3xl w-6 leading-7 "
                  onClick={() => {
                    setNum(num - 1);
                    if (num <= 1) {
                      setNum(1);
                    }
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <button
                className="uppercase bg-green-500 text-white text-xl font-medium px-16 py-3 mx-2 rounded hover:bg-black hover:text-white"
                //   onClick={() => handleAddToCart(product)}
                type="submit"
            >
              Add To Cart
            </button>
            <button
              className="ml-2"
              onClick={() => handleAddToWishList(product)}
            >
              <i
                className={classNames(
                  index !== -1 ? "fas fa-heart" : "far fa-heart"
                )}
              ></i>
            </button>
          </div>
          </form>
    )
}

export default FormOverlay
