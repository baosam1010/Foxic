import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import blogCarousel1 from './../../assets/images/blog-fashion-02.webp';
import blogCarousel2 from './../../assets/images/blog-fashion-03.webp';
import blogCarousel3 from './../../assets/images/blog-fashion-04.webp';




function PostSlide(props) {

    const { match, posts } = props;
    const url = match.url.toLowerCase();
    console.log('match_PostPage1:', url);
    console.log('posts_PostPage1:', posts);

    let slider = useRef(null);
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    
    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <button
                className={className}
                style={{ ...style, display: "none", }}
                onClick={onClick}
            > {`<`}</button>
        );
    };

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <button
                className={className}
                style={{ ...style, display: "none", }}
                onClick={onClick}
            >{`>`}</button>
        );
    };
    const next = () => {
        slider.slickNext();
    };
    const previous = () => {
        slider.slickPrev();
    };

    return (
        <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
            <h2 className="block text-2xl font-semibold " >Related Posts</h2>
            <div className="">
                <button className="bg-gray-50 text-lg px-1 mr-2 hover:text-white hover:bg-black" onClick={previous}>
                    <i className=" fas fa-chevron-left"></i>
                </button>
                <button className="bg-gray-50 text-lg px-1 hover:text-white hover:bg-black" onClick={next}>
                    <i className="fas fa-chevron-right"></i>
                </button>

            </div>
        </div>
        <Slider ref={c => (slider = c)} {...settings} >

            <div className="w-full ">
                <div className="w-full flex">
                    <div className="w-3/6">
                        <img className="" src={blogCarousel1} alt="First slide" />
                    </div>
                    <div className="bg-gray-100 pl-7 py-12 pr-11 w-3/6 ">
                        <div className=" flex text-xs ">
                            <div className="mx-2">
                                <i className="mr-1 far fa-calendar-alt"></i>
                                <span>November 17, 2020, 2020</span>
                            </div>
                            <div className="mx-2">
                                <i className="mr-1 far fa-comment-dots"></i>
                                <span>15 comments</span>
                            </div>
                        </div>
                        <Link to="">
                            <h3 className="text-2xl font-medium">Trends to Try This Season</h3>
                        </Link>
                        <p className="mt-3">
                            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco`}
                        </p>
                        <button className=" bg-green-400 text-white hover:bg-black uppercase text-sm font-bold rounded p-1 py-2 leading-4  mt-4">
                            <Link to="/">Read More</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className=" w-full ">
                <div className="w-full flex">
                    <div className="w-3/6">
                        <img className="" src={blogCarousel2} alt="Second slide" />
                    </div>
                    <div className="bg-gray-100 pl-7 py-12 pr-11 w-3/6 ">
                        <div className=" flex text-xs ">
                            <div className="mx-2">
                                <i className="mr-1 far fa-calendar-alt"></i>
                                <span>November 17, 2020, 2020</span>
                            </div>
                            <div className="mx-2">
                                <i className="mr-1 far fa-comment-dots"></i>
                                <span>15 comments</span>
                            </div>
                        </div>
                        <Link to="">
                            <h3 className="text-2xl font-medium">Trends to Try This Season</h3>
                        </Link>
                        <p className="mt-3">
                            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco`}
                        </p>
                        <button className=" bg-green-400 text-white hover:bg-black uppercase text-sm font-bold rounded p-1 py-2 leading-4  mt-4">
                            <Link to="/">Read More</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className=" w-full ">
                <div className="w-full flex">
                    <div className="w-3/6">
                        <img className="" src={blogCarousel3} alt="Third slide" />
                    </div>
                    <div className="bg-gray-100 pl-7 py-12 pr-11 w-3/6 ">
                        <div className=" flex text-xs ">
                            <div className="mx-2">
                                <i className="mr-1 far fa-calendar-alt"></i>
                                <span>November 17, 2020, 2020</span>
                            </div>
                            <div className="mx-2">
                                <i className="mr-1 far fa-comment-dots"></i>
                                <span>15 comments</span>
                            </div>
                        </div>
                        <Link to="">
                            <h3 className="text-2xl font-medium">Trends to Try This Season</h3>
                        </Link>
                        <p className="mt-3">
                            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco`}
                        </p>
                        <button className=" bg-green-400 text-white hover:bg-black uppercase text-sm font-bold rounded p-1 py-2 leading-4  mt-4">
                            <Link to="/">Read More</Link>
                        </button>
                    </div>
                </div>
            </div>

        </Slider>

    </div>

    )
}

export default PostSlide
