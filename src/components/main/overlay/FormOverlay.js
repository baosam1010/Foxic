import classNames from 'classnames';
import React, { useState } from 'react'

function FormOverlay(props) {
  let index = -1;
  const {
    product,
    onAddToCart, 
    onAddToWishList,
    wishList } = props
  // const [num, setNum] = useState(1);
  const [formOverlay, setFormOverlay] = useState({
    quantity: 1,
    color: "red",
    size: "small",
  });

  // console.log("FormOverlay", product)
  // choose color
  function colorSelect(product) {
    let xhtml = null;
    const { linkProduct, linkProductColor } = product;
    if (
      linkProductColor.length === 0  ) {
      xhtml = (
        <div
          key={linkProduct[0]}
          className="w-12 h-16 ml-2 border-2 border-indigo-600 rounded"
          // data-img={product.color}
          onClick={(e) => handleChoiceColor("defaultColor", e) 
          // setFormOverlay({ ...formOverlay, color: "defaultColor0" })
          }
        >
          <img
            className="object-cover h-full "
            src={product.linkProduct[0]}
            alt={`product1`}
          />
        </div>
      );
    } else {
      xhtml = product.linkProductColor.map((item, i) => {
        return (
          <div className={classNames(i === 0 ? "border-indigo-600" : "", "w-12 h-16 border-2 ml-2 rounded")}
            key={i}
            // data-img={product.color[0]}
            onClick={(e) =>
              handleChoiceColor(product.color[i].slice(3,-4), e) 
            // setFormOverlay({ ...formOverlay, color: `defaultColor${i}` })
            }

          >
            <img
              className="object-cover h-full"
              src={item}
              alt={`product${i}`}
            />
          </div>
        );
      });
    }
    return xhtml;
  };
  // Submit form
  function handleChangeForm(e) {
    e.preventDefault();
    console.log("fomrOverlay1:", { product, ...formOverlay });
    onAddToCart( product, 
      formOverlay.quantity,formOverlay.color );
  };

  // Add to Cart
  // const handleAddToCart = (product) => {
  //     onAddToCart(product);
  // };

  const handleChoiceSize = (size, e) => {
    console.log("size:", size);
    if (e) {
      const arrLi = e.target.parentElement.children;
      for (let i = 0; i < arrLi.length; i++) {
        // console.log(`arr${i}:`, arr[i])
        if (arrLi[i].classList.value.includes('border-indigo-600')) {
          arrLi[i].classList.remove('border-indigo-600');
        }
      }
      e.target.classList.add('border-indigo-600');
      setFormOverlay({ ...formOverlay, size})
    }
  };
  const handleChoiceColor = (color, e) => {
    console.log(`color:`, color);
    if (e) {
      const arrLi = e.target.parentElement.parentElement.children;
      if (arrLi.length > 0) {
        for (let i = 0; i < arrLi.length; i++) {
          if (arrLi[i].classList.value.includes('border-indigo-600')) {
            arrLi[i].classList.remove('border-indigo-600');
          }
        }
      }
      e.target.parentElement.classList.add('border-indigo-600');
          setFormOverlay({ ...formOverlay, color })
    }
  };

  // Add to wishList
  const handleAddToWishList = (product) => {
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

  // console.log('product11:', product)

  return (
    <form
      onSubmit={(e) => handleChangeForm(e)}
    >
      <div className="flex flex-nowrap items-center mt-6">
        <span>Color:</span>
        {colorSelect(product)}
      </div>
      <div className="flex items-center mt-5/20">
        <label className="block mr-4 text-xl font-semibold">
          Size:
        </label>
        <ul className="flex items-center">
          <li className="mr-4 text-base font-medium rounded border-2 px-2 py-1 border-indigo-600 hover:cursor-pointer  hover:border-indigo-600  "
            onClick={(e) => handleChoiceSize("small", e)}
          >
            Small
          </li>
          <li className="mr-4 text-base font-medium rounded border-2 px-2 py-1 hover:cursor-pointer hover:border-indigo-600"
            onClick={(e) => handleChoiceSize("medium", e)}
          >
            Medium
          </li>
          <li className="mr-4 text-base font-medium rounded border-2 px-2 py-1 hover:cursor-pointer hover:border-indigo-600"
            onClick={(e) => handleChoiceSize("large", e)}
          >
            Large
          </li>
        </ul>
      </div>
      <div
        className="w-full relative flex flex-nowrap mt-5"
      >
        <div className="flex flex-row-reverse">
          <input
            className="pl-6 pr-2  py-1  w-20 text-2xl  bg-gray-200 "
            type="number"
            name="quantity"
            value={formOverlay.quantity}
            onChange={(e) =>
              setFormOverlay({ ...formOverlay, quantity: e.target.value })
            }
          />
          <div className="flex flex-col h-full  items-center justify-center absolute mr-2">
            <button
              type="button"
              onClick={() => setFormOverlay({ ...formOverlay, quantity: formOverlay.quantity + 1 })}
              className="text-3xl w-6 leading-7"
            >
              +
            </button>
            <button
              type="button"
              className="text-3xl w-6 leading-7 "
              onClick={() => {
                setFormOverlay({ ...formOverlay, quantity: formOverlay.quantity - 1 });
                if (formOverlay.quantity <= 1) {
                  setFormOverlay({ ...formOverlay, quantity: 1 });
                }
              }}
            >
              -
            </button>
          </div>
        </div>
        <button
          className="uppercase bg-green-500 text-white text-xl font-medium px-16 py-3 mx-2 rounded hover:bg-black hover:text-white"
          // onClick={() => handleAddToCart(product)}
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
              index !== -1 ? "fas fa-heart" : "far fa-heart", "text-4xl"
            )}
          ></i>
        </button>
      </div>
    </form>
  )
}

export default FormOverlay
