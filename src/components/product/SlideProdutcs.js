import React, { 
    // useEffect, 
    useRef, 
    // useState 
} from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick'
// import productApi from '../../api/productApi';

function SlideProdutcs(props) {
    const {products} =props;
    // console.log("productsSlide:", products)
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
        // console.log(`idex${index}:`, product.linkProduct)
        // let nameProduct = product.name.toLowerCase().replace(/ /g, "-");
        return (
          <div className=" h-365 px-4/16 ">
            <div className="max-w-7xl h-full">
              <Link to={`/product/${product.id}`}>
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
        // console.log("products2222:", products)
        result = products.map((item, index) => {
            // console.log(item)
          return <CustomSlide key={item.name} item={item} index={index} />;
        });
        return result;
      };
    //   const [products, setProducts] = useState(null);
    //   useEffect(() => {
    //         try {
    //             const getProducts = async () => {
    //                 const result = await productApi.getAll(); 
    //                 setProducts(result);
    //             };
    //             getProducts();
    //         } catch (error) {
    //             console.log("Fecth prodcts fail")
    //         }
    //   },[])
    return (
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
    )
}

export default (SlideProdutcs);
