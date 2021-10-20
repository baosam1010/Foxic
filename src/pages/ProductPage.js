import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";
import imgProDEs2 from "./../assets/images/product-description-02.webp";
import imgProDEs1 from "./../assets/images/product-description-01.webp";
import { actAddToCart } from "../action";
import SizeGuide from "../components/product/SizeGuide";
import Delivery from "../components/product/Delivery";
import ContentHeaderProduct from "../components/product/ContentHeaderProduct";
import CarouselOverLay from "../components/main/overlay/CarouselOverLay";
// import FooterProductPage from "../components/product/FooterProductPage";

function ProductPage(props) {
  const { Products, onAddToCart } = props;
  const [isSizeGuide, setIsSizeGuide] = useState(false);
  const [isDelivery, setIsDelivery] = useState(false);
  const { match } = props;
  let nameUpdate = match.url.indexOf("/product");
  let urlName = match.url.slice(nameUpdate + 9);
  // console.log(nameUpdate);
  const [num, setNum] = useState(1);

  // let quantity = useRef(num);

  const arr = [...Products[0].productsList, ...Products[0].ProductArrival];

  // Xem lai cach loc object thoa dieu kien nao do...

  let products = arr
    .map((v) => v["name"])
    .map((v, i, array) => {
      if (array.indexOf(v) === i) {
        return i;
      } else return false;
    })
    .filter((v) => arr[v])
    .map((v) => arr[v]);

  // lay san pham theo ten
  function getproduct(products, name) {
    let result = null;
    result = products.filter((item) => {
      return item.name.toLowerCase().replace(/ /g, "-") === name;
    });
    return result;
  }

  let product = getproduct(products, urlName);
  // console.log('productPage:', product);
  // const id= product[0].id;
  // console.log('idProductpages:', id); 

  product.linkimg = [...product[0].linkProduct, ...product[0].linkProductColor];

  let slider = useRef(null);
  let slider2 = useRef(null);

  function NextArrow1(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{
          ...style,
          display: "none",
          position: "absolute",
          right: 0,
          background: "green",
          zIndex: 2,
          transform: "translate(-84%,-50%)",
        }}
        onClick={onClick}
      >
        {" "}
        {`<`}
      </button>
    );
  }

  function PrevArrow1(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{
          ...style,
          display: "none",
          position: "absolute",
          left: 0,
          transform: "translate(84%,-50%)",
          zIndex: 2,
        }}
        onClick={onClick}
      >{`>`}</button>
    );
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow1 />,
    prevArrow: <PrevArrow1 />,
  };
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow1 />,
    prevArrow: <PrevArrow1 />,
  };

  const next = () => {
    slider.slickNext();
    slider2.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
    slider2.slickPrev();
  };

  function CustomSlide(props) {
    const { index, item: product } = props;
    let nameProduct = product.name.toLowerCase().replace(/ /g, "-");
    return (
      <div className=" h-full px-4/16 ">
        <div className="max-w-7xl h-full">
          <Link to={`/product/${nameProduct}`}>
            <img
              className="object-cover h-full  "
              src={product.linkProduct[0]}
              alt={`pdoruct${index}`}
            />
          </Link>
        </div>
      </div>
    );
  }

  const showProductSlide = (products) => {
    let result = null;
    // console.log("products:", products)
    result = products.map((item, index) => {
      return <CustomSlide key={item.name} item={item} index={index} />;
    });
    return result;
  };

  const showColor = (product) => {
    let result = null;
    // console.log('productpage:', product[0]) 

    if(product[0].linkProductColor.length === 0){
      console.log('productpage:', product[0]) 
      result = (
        <li
          key={product[0].linkProduct[0]}
          className="block w-12 h-16 mr-2 border-2 rounded border-indigo-600  hover:border-indigo-600 hover:cursor-pointer"
        >
          <img className="object-cover " src={product[0].linkProduct[0]} alt="color" />
        </li>
      );
    }else{
      let linkImg = [ ...product[0].linkProductColor ];
      
      result = linkImg.map((item, index) => {
        return (
          <li
            key={index}
            // className={classNames(
            //   index === 0 ? "border-indigo-600" : "",
            //   "block w-12 h-16 mr-2 border-2 rounded hover:border-indigo-600 hover:cursor-pointer"
            // )}
            className="block w-12 h-16 mr-2 border-2 rounded hover:border-indigo-600 hover:cursor-pointer"
            data-color={product[0].color[index].slice(3,-4)}
            onClick={(e)=>{handleChoiceColor(product[0].color[index].slice(3,-4), e)}}
            // style={{backgroundImage:`url(${item})`}}
          >
            <img className="object-cover h-full" src={item} alt="color" />
          </li>
        );
      });
    }   
    return result;
  };

  const handleAddToCart = (product, quantity) => {
    onAddToCart(product, quantity);
  };

  const handleChangeInput = (e) => {
    // console.log('number:',typeof e.target.value)
    setNum(e.target.value);
  };
  const handleChangeForm = (e) => {
    e.preventDefault();
  };

  const handleChoiceSize =(size, e)=>{
    console.log("size:", size);
    if(e){
      const arrLi = e.target.parentElement.children;
      for (let i=0; i< arrLi.length; i++){
        // console.log(`arr${i}:`, arr[i])
        if(arrLi[i].classList.value.includes('border-indigo-600')){
          arrLi[i].classList.remove('border-indigo-600');
        }
      }
      e.target.classList.add('border-indigo-600');
    }
  };

  const handleChoiceColor=(color, e)=>{
    console.log(`color:`,color);
    e.stopPropagation();
    // console.log('e1:',e.target.parentElement.parentElement.children)
    if(e){
      const arrLi = e.target.parentElement.parentElement.children;
      console.log("arrLi111:", arrLi)
      if(arrLi.length>0){
        for (let i=0; i< arrLi.length; i++){
          console.log("arrli121212", arrLi[0].classList)
          if(arrLi[i].classList.value.includes('border-indigo-600')){
            arrLi[i].classList.remove('border-indigo-600');
          }
        }
      }
      e.target.classList.add('border-indigo-600');
    }
  };

  return (
    <div className="max-w-full">
      {/* BREAD CRUM */}
      <div className="bg-gray-200 ">
        <div className="px-2 lg:px-0 max-w-7xl m-auto">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item ">
                <Link to={`/product/${urlName}`}>Product</Link>
              </li>
              <li className="breadcrumb-item active">
                <Link to={`/product/${urlName}`}>{product[0].name}</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl m-auto">
        <div className="px-2">
        <ContentHeaderProduct  product={product[0]} />
            
        </div>
        {/* product */}
        <div className="px-2">
          <div className="grid grid-cols-12 gap-4">
            <div className=" col-span-12 lg:col-span-6">
              <CarouselOverLay key={product[0].name} product={product[0]} />
            </div>

            <div className=" col-span-12 lg:col-span-6">
              <div className="mt-4">
                {/* header product */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-between mr-5">
                    <h1 className="block text-4xl leading-42 px-3">$180</h1>
                    <div className="flex flex-col px-3 ">
                      <span className="line-through text-18">$210.00</span>
                      <span className="text-pink-500 text-sm leading-5 font-semibold  whitespace-nowrap">
                        You Save: $131.99 (28%)
                      </span>
                    </div>
                  </div>
                  <div className="hidden bg-gray-50 lg:flex items-center justify-between px-4 py-3">
                    <i className="block text-5xl  leading-4 pr-4 far fa-clock"></i>
                    <p className="block text-sm font-semibold ">
                      This product was viewed 13 times within last hour
                    </p>
                  </div>
                </div>
                {/* Short description */}
                <div className="mt-5/20 mb-5/20">
                  <h3 className="text-18 font-semibold leading-6 mb-1">
                    Short description
                  </h3>
                  <p className="mt-2 text-sm leading-6">
                    {`
                                        Model is 5'9" wearing Size XS TallAnd without further ado, we give you our
                                         finest Shopify Theme FOXic! It is a subtle, complex and yet an extremely 
                                         easy to use template for anyone, who wants to create own website in ANY 
                                         area of expertise.
                                        `}
                  </p>
                  <div className="">
                    <ul className="grid grid-cols-2 mt-2">
                      <div className="col-span-1 ">
                        <li className="">
                          <i className="text-sm leading-5  mr-2 fas fa-check"></i>
                          <span>100% Polyester</span>
                        </li>
                        <li>
                          <i className="text-sm leading-5  mr-2 mt-2/10  fas fa-check"></i>
                          <span>Lining:100% Viscose</span>
                        </li>
                      </div>
                      <div className="col-span-1">
                        <li>
                          <i className="text-sm leading-5  mr-2 fas fa-check"></i>
                          <span>Do not dry clean</span>
                        </li>
                        <li>
                          <i className="text-sm leading-5  mr-2 mt-2/10 fas fa-check"></i>
                          <span>Only non-chlorine</span>
                        </li>
                      </div>
                    </ul>
                  </div>

                  <div className="mt-5/20 relative">
                    <div className="border-b-4 border-gray-200 text-sm font-semibold leading-6">
                      Hurry Up! Left <span className="text-green-300 ">25</span>{" "}
                      in stock
                    </div>
                    <div className="">
                      <div className="border-b-4 border-gray-600 w-3/4 absolute bottom-0"></div>
                    </div>
                  </div>
                  <div className="mt-5/20 flex items-center">
                    <i className="text-xl pr-2 fas fa-box"></i>
                    <div className="text-sm leading-6">
                      Order in the next
                      <span className="font-semibold ml-2 mr-1 tracking-wider">
                        02
                      </span>
                      <span className="font-semibold mx-1 tracking-wider">
                        :
                      </span>
                      <span className="font-semibold mx-1 tracking-wider">
                        46
                      </span>
                      <span className="font-semibold mx-1 tracking-wider">
                        :
                      </span>
                      <span className="font-semibold ml-1 mr-2 tracking-wider">
                        10
                      </span>
                      to get it by Tuesday, September 08, 2020
                    </div>
                  </div>
                  <div className="mt-5/20">
                    <div className="bg-gray-50 ">
                      <ul className="grid grid-cols-2 px-7 pt-5/20 pb-3/12">
                        <div className="col-span-1">
                          <li className="">
                            Availability:
                            <span className="font-medium"> In stock</span>
                          </li>
                          <li className="">
                            Tax Info:{" "}
                            <span className="font-medium"> Tax included</span>
                          </li>
                          <li className="">
                            Collection:
                            <span className="font-medium"> Women</span>
                          </li>
                        </div>
                        <div className="col-span-1">
                          <li className="">
                            Sku:
                            <span className="font-medium"> FOXic-45812</span>
                          </li>
                          <li className="">
                            Vendor: <span className="font-medium"> Banita</span>
                          </li>
                          <li className="">
                            Barcode:{" "}
                            <span className="font-medium"> 314363563</span>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>

                  {/* Form buy product */}
                  <div className="mt-5/20">
                    <form onSubmit={(e) => handleChangeForm(e)}>
                      {/* choose color */}
                      <div className="flex items-center ">
                        <label className="mr-4 text-xl font-semibold">
                          Color:
                        </label>
                        <ul  v-for="item in items" className="flex first:border-red-600 addFirstBorder ">{showColor(product)}</ul>
                      </div>
                      {/* choose size */}

                      <div className="flex items-center mt-5/20">
                        <label className="block mr-4 text-xl font-semibold">
                          Size:
                        </label>
                        <ul className="flex items-center">
                          <li className="mr-4 text-base font-medium rounded border-2 px-2 py-1 hover:cursor-pointer hover:border-indigo-600 border-indigo-600 "
                            onClick={(e)=>handleChoiceSize("small",e)}
                          >
                            Small
                          </li>
                          <li className="mr-4 text-base font-medium rounded border-2 px-2 py-1 hover:cursor-pointer hover:border-indigo-600"
                          onClick={(e)=>handleChoiceSize("medium",e)}
                          >
                            Medium
                          </li>
                          <li className="mr-4 text-base font-medium rounded border-2 px-2 py-1 hover:cursor-pointer hover:border-indigo-600"
                          onClick={(e)=>handleChoiceSize("large",e)}
                          >
                            Large
                          </li>
                        </ul>
                      </div>
                      {/* choose quantity, cart, wishlist */}

                      <div className="w-full relative flex flex-between  mt-5/20">
                        <div className="flex flex-row-reverse">
                          <input
                            className="pl-6 pr-2  py-1  w-20 text-2xl  bg-gray-200 "
                            value={num}
                            onChange={(e) => handleChangeInput(e)}
                          />
                          <div className="flex flex-col h-full  items-center justify-center absolute mr-2">
                            <button
                              onClick={() => setNum(num + 1)}
                              className="text-3xl w-6 leading-7"
                            >
                              +
                            </button>
                            <button
                              onClick={() => {
                                setNum(num - 1);
                                if (num <= 1) {
                                  setNum(1);
                                }
                              }}
                              className="text-3xl w-6 leading-7 "
                            >
                              -
                            </button>
                          </div>
                        </div>
                        <div className="flex-grow">
                          <button
                            onClick={() => handleAddToCart(product[0], num)}
                            className="w-full uppercase  bg-green-500 text-white text-xl font-medium  py-3 mx-2 rounded hover:bg-black hover:text-white"
                          >
                            Add To Cart
                          </button>
                        </div>
                        <div className="flex items-center mx-2">
                          <button className="ml-2 right-0">
                            <i className="text-3xl far fa-heart"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="mt-5/20 flex flex-row-reverse  items-center ">
                      <Link
                        to="/"
                        className="hover:text-green-300 hover:underline"
                      >
                        I agree to the terms of service
                      </Link>
                      <input className="mr-2 w-5 h-5" type="checkbox" />
                    </div>
                  </div>

                  <div className="mt-5/20">
                    <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <li className="">
                        <i className="mr-3 lg:mr-1 text-green-300 fas fa-ruler"></i>
                        <button
                          onClick={() => setIsSizeGuide(!isSizeGuide)}
                          className="hover:text-green-300 hover:underline"
                        >
                          Size Guide
                        </button>
                      </li>
                      <li>
                        <i className="mr-3 lg:mr-1 text-green-300 fas fa-truck"></i>
                        <button
                          onClick={() => setIsDelivery(!isDelivery)}
                          className="hover:text-green-300 hover:underline"
                        >
                          Delivery and Return
                        </button>
                      </li>
                      <li>
                        <i className="mr-3 lg:mr-1 text-green-300 fas fa-envelope"></i>
                        <button className="hover:text-green-300 hover:underline">
                          Ask about this product
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="">
                    <img
                      className="hidden lg:block"
                      src='https://big-skins.com/frontend/foxic-html-demo/images/payment/safecheckout.webp'
                      alt="logoPay1"
                    />
                    <img
                      className="block lg:hidden"
                      src="https://big-skins.com/frontend/foxic-html-demo/images/payment/safecheckout-m.webp"
                      alt="logoPay2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bao hanh  ho tro*/}
      <div className="hidden lg:block bg-gray-200 mt-20">
        <div className="max-w-7xl m-auto py-2">
          <ol className="flex items-center justify-between">
            <li className="">
              <i className="text-2xl mr-2 fas fa-headset"></i>
              <span className="font-semibold">24/7 Support</span>
            </li>
            <li className="">
              <span className="font-semibold">
                {" "}
                Use promocode FOXIC to get 15% discount!
              </span>
            </li>
            <li className="">
              <i className="text-2xl mr-2 fas fa-shipping-fast"></i>
              <span className="font-semibold">Fast Shipping</span>
            </li>
          </ol>
        </div>
      </div>
      {/* sua tai day */}
      <div className=" max-w-7xl m-auto">
        <ol className=" flex flex-col mt-10 lg:flex-row lg:items-center lg:mt-20">
          <li className="-ml-5 group  relative">
            <div className=" ml-7 mr-2  bg-gray-300 lg:bg-transparent ">
              <div className="font-semibold text-xl px-5/20 py-2 flex justify-between ">
                <span className=" lg:border-b-2 lg:pb-2 border-transparent lg:group-hover:border-black">
                  Description
                </span>
                <div className="block lg:hidden">
                  <i className=" hidden fas fa-plus"></i>
                  <i className="  fas fa-minus"></i>
                </div>
              </div>
            </div>
            {/* content moblie */}
            <div className="lg:hidden relative w-full mb-5 mt-6">
              <div className="ml-9 mr-4">
                <h3 className="mb-3 text-18 font-semibold leading-7">
                  Give you a complete account of the system
                </h3>
                <p className="lg:px-3.5 mb-5/20">
                  {`Nor again is there anyone who loves or pursues or desires to 
                        obtain pain of itself, because it is pain, but because occasionally
                         circumstances occur in which toil and pain can procure him some great pleasure.
                          To take a trivial example, which of us ever undertakes laborious physical exercise,
                           except to obtain some advantage from it? But who has any right to find fault
                            with a man who chooses to enjoy a pleasure that has no annoying consequences,
                             or one who avoids a pain that produces no resultant pleasure.
                        `}
                </p>
                <div className="">
                  <div className="grid grid-cols-12 sm:gap-6">
                    <div className="col-span-12 sm:col-span-8">
                      <p className="lg:px-3.5 mb-5/20">
                        {`Nor again is there anyone who loves or pursues or desires to obtain
                                 pain of itself, because it is pain, but because occasionally circumstances
                                  occur in which toil and pain can procure him some great pleasure.
                                   Nor again is there anyone who loves or pursues.
                                `}
                      </p>
                      <div className="w-full ">
                        <h4 className="px-3.5 mb-5/20 text-18 font-semibold">
                          List heading
                        </h4>
                        <div className="lg:px-3.5 ">
                          <ol className="list-decimal flex flex-col lg:flex-row lg:justify-between">
                            <div className="ml-4">
                              <li>
                                All this mistaken idea of denouncing pleasure
                              </li>
                              <li>Raising pain was born and I will give you</li>
                              <li>Complete account of the system</li>
                            </div>
                            <div className="ml-4 ">
                              <li>
                                All this mistaken idea of denouncing pleasure
                              </li>
                              <li>Raising pain was born and I will give you</li>
                              <li>Complete account of the system</li>
                            </div>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 mt-2 sm:col-span-4">
                        <img
                          className=""
                          src={imgProDEs2}
                          alt="imgDescription2"
                        />
                    </div>
                  </div>
                </div>

                <div className="mt-5/20 ">
                  <div className="grid grid-cols-12 md:gap-6">
                    <div className="col-span-12 md:col-span-4 lg:col-span-3">
                      <img className="" src={imgProDEs1} alt="imgProDEs1" />
                    </div>
                    <div className="col-span-12 md:col-span-8 lg:col-span-9">
                      <p className="mt-4">
                        {`But I must explain to you how all this mistaken idea of denouncing
                                     pleasure and praising pain was born and I will give you a complete
                                      account of the system, and expound the actual teachings of the great
                                       explorer of the truth, the master-builder of human happiness.
                                    `}
                      </p>
                      <p className="mt-2">
                        {`Nor again is there anyone who loves or pursues or desires to obtain 
                                    pain of itself, because it is pain, but because occasionally circumstances
                                     occur in which toil and pain can procure him some great pleasure. To take a 
                                     trivial example, which of us ever undertakes laborious physical exercise,
                                     except to obtain some advantage from it? But who has any right to find fault
                                      with a man who chooses to enjoy a pleasure that has no annoying consequences,
                                       or one who avoids a pain that produces no resultant pleasure
                                    `}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="-ml-5 mt-2 group  ">
            <div className=" ml-7 mr-2  bg-gray-300 lg:bg-transparent ">
              <div className="font-semibold text-xl px-5/20 py-2 flex justify-between ">
                <span className=" lg:border-b-2 lg:pb-2 border-transparent lg:group-hover:border-black">
                  Sizing guide
                </span>
                <div className="block lg:hidden">
                  <i className="  fas fa-plus"></i>
                  <i className="hidden  fas fa-plus"></i>
                </div>
              </div>
            </div>
          </li>
          <li className="-ml-5 mt-2 group  ">
            <div className=" ml-7 mr-2  bg-gray-300 lg:bg-transparent ">
              <div className="font-semibold text-xl px-5/20 py-2 flex justify-between ">
                <span className=" lg:border-b-2 lg:pb-2 border-transparent lg:group-hover:border-black">
                  Global Tag
                </span>
                <div className="block lg:hidden">
                  <i className="  fas fa-plus"></i>
                  <i className="hidden  fas fa-plus"></i>
                </div>
              </div>
            </div>
          </li>
          <li className="-ml-5 mt-2 group  ">
            <div className=" ml-7 mr-2  bg-gray-300 lg:bg-transparent ">
              <div className="font-semibold text-xl px-5/20 py-2 flex justify-between ">
                <span className=" lg:border-b-2 lg:pb-2 border-transparent lg:group-hover:border-black">
                  Reviews
                </span>
                <div className="block lg:hidden">
                  <i className="  fas fa-plus"></i>
                  <i className="hidden  fas fa-plus"></i>
                </div>
              </div>
            </div>
          </li>
        </ol>

        {/* conttent 1*/}
        <div className="hidden mb-20 mt-6">
          <h3 className="mb-3 text-18 font-semibold leading-7">
            Give you a complete account of the system
          </h3>
          <p className="px-3.5 mb-5/20">
            {`Nor again is there anyone who loves or pursues or desires to 
                        obtain pain of itself, because it is pain, but because occasionally
                         circumstances occur in which toil and pain can procure him some great pleasure.
                          To take a trivial example, which of us ever undertakes laborious physical exercise,
                           except to obtain some advantage from it? But who has any right to find fault
                            with a man who chooses to enjoy a pleasure that has no annoying consequences,
                             or one who avoids a pain that produces no resultant pleasure.
                        `}
          </p>
          <div className="">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-9">
                <p className="px-3.5 mb-5/20">
                  {`Nor again is there anyone who loves or pursues or desires to obtain
                                 pain of itself, because it is pain, but because occasionally circumstances
                                  occur in which toil and pain can procure him some great pleasure.
                                   Nor again is there anyone who loves or pursues.
                                `}
                </p>
                <div className="w-full ">
                  <h4 className="px-3.5 mb-5/20 text-18 font-semibold">
                    List heading
                  </h4>
                  <div className="px-3.5 ">
                    <ol className="list-decimal flex justify-between">
                      <div className="ml-4">
                        <li>All this mistaken idea of denouncing pleasure</li>
                        <li>Raising pain was born and I will give you</li>
                        <li>Complete account of the system</li>
                      </div>
                      <div>
                        <li>All this mistaken idea of denouncing pleasure</li>
                        <li>Raising pain was born and I will give you</li>
                        <li>Complete account of the system</li>
                      </div>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <div>
                  <img className="" src={imgProDEs2} alt="imgDescription2" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5/20 ">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-3">
                <img className="" src={imgProDEs1} alt="imgProDEs1" />
              </div>
              <div className="col-span-9">
                <p>
                  {`But I must explain to you how all this mistaken idea of denouncing
                                     pleasure and praising pain was born and I will give you a complete
                                      account of the system, and expound the actual teachings of the great
                                       explorer of the truth, the master-builder of human happiness.
                                    `}
                </p>
                <p>
                  {`Nor again is there anyone who loves or pursues or desires to obtain 
                                    pain of itself, because it is pain, but because occasionally circumstances
                                     occur in which toil and pain can procure him some great pleasure. To take a 
                                     trivial example, which of us ever undertakes laborious physical exercise,
                                     except to obtain some advantage from it? But who has any right to find fault
                                      with a man who chooses to enjoy a pleasure that has no annoying consequences,
                                       or one who avoids a pain that produces no resultant pleasure
                                    `}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 ">
          <h2 className="text-3xl font-semibold  w-full text-center">
            You may also like
          </h2>
          <div className="w-full flex justify-center mt-5/20">
            <button onClick={previous}>
              <i className="text-2xl px-3 py-1 mx-2 rounded bg-gray-200 hover:bg-black hover:text-white fas fa-chevron-left"></i>
            </button>
            <button onClick={next}>
              <i className="text-2xl px-3 py-1 mx-2 rounded bg-gray-200 hover:bg-black hover:text-white fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="hidden  mb-10 lg:block w-full mt-5/20 px-4">
            <Slider
              className="-mx-4"
              ref={(item) => (slider = item)}
              {...settings}
            >
              {showProductSlide(products)}
            </Slider>
          </div>
          <div className=" lg:hidden mb-10 sm:w-full mt-5/20 px-1">
            <Slider
              className="hidden lg:block -mx-1"
              ref={(item) => (slider2 = item)}
              {...settings2}
            >
              {showProductSlide(products)}
            </Slider>
          </div>
        </div>
      </div>

      {/* footer buy product*/}
          {/* <FooterProductPage 
            num={num}
            setNum={setNum}
            product={product}
            handleChangeInput={handleChangeInput }
            handleAddToCart={handleAddToCart}
          /> */}
          
      <div className="bg-gray-50 fixed bottom-0 left-0 right-0 z-10">
        <div className="max-w-7xl m-auto ">
          <div className="max-w-full flex justify-between mx-2 my-4">
            <div className=" flex items-center ">
              <img
                className="w-12 h-16"
                src={product[0].linkProduct[0]}
                alt=""
              />
              <div className="hidden h-full lg:flex flex-col  justify-between ml-5">
                <h2 className="block my-1 text-xl font-semibold">
                  {product[0].name}
                </h2>
                <div className="flex items-center my-1 ">
                  <span className="text-xl font-semibold">$200.00</span>
                  <span className="line-through text-base font-normal ml-2">
                  {product[0].price}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-200  w-3/6 lg:w-2/6 h-16">
              <select className="bg-gray-200 w-full h-full" name="TenDanhSach">
                <option>-- Please choose your optional --</option>
                <option>-- It is....1 --</option>
                <option>-- It is....2 --</option>
              </select>
            </div>
            <div className="flex items-center">
              <label className="hidden lg:block text-xl font-semibold">
                Quantity:
              </label>
              <input
                className="hidden lg:block pl-8 pr-2  py-3  w-20 text-2xl  bg-gray-200 rounded mx-1  hidArrInput"
                type="number"
                value={num}
                onChange={(e) => handleChangeInput(e)}
              />
              <div className="hidden lg:flex flex-col justify-evenly mr-1">
                <button
                  onClick={() => setNum(num + 1)}
                  className="text-lg w-7  bg-gray-200 rounded-full mb-1"
                >
                  <i className="fas fa-plus"></i>
                </button>
                <button
                  onClick={() => {
                    setNum(num - 1);
                    if (num <= 1) {
                      setNum(1);
                    }
                  }}
                  className="text-lg w-7 bg-gray-200 rounded-full  mt-1"
                >
                  <i className="fas fa-minus"></i>
                </button>
              </div>
              <div className=" lg:flex-grow">
                <button
                  onClick={() => handleAddToCart(...product, num)}
                  className="w-full uppercase  bg-green-500 text-white text-sm lg:text-xl font-medium  py-3 px-2 rounded hover:bg-black hover:text-white"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SizeGuide isSizeGuide={isSizeGuide} setIsSizeGuide={setIsSizeGuide} />
      <Delivery isDelivery={isDelivery} setIsDelivery={setIsDelivery} />
    </div>
  );
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product, quantity) => {
      dispatch(actAddToCart(product, quantity));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    Products: state.Products,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
