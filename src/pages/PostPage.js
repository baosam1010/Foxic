import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PostAside from "../components/post/PostAside";
import blogPost2 from './../assets/images/blog-02.webp';
import blogPost4 from './../assets/images/blog-04.webp';
import blogCarousel1 from './../assets/images/blog-fashion-02.webp';
import blogCarousel2 from './../assets/images/blog-fashion-03.webp';
import blogCarousel3 from './../assets/images/blog-fashion-04.webp';
import logoUser from './../assets/images/comment-author.webp';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";



function PostPage(props) {

    const { match, posts } = props;
    const url = match.url.toLowerCase();
    console.log('match_PostPage:', url);
    console.log('posts_PostPage:', posts);

    let slider = useRef(null);


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
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    const next = () => {
        slider.slickNext();
    };
    const previous = () => {
        slider.slickPrev();
    };


    return (
        <div>
            {/* BREAD CRUM */}
            <div className="bg-gray-200 ">
                <div className="max-w-7xl m-auto">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/ourpost">Our Post</Link></li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="max-w-7xl m-auto">

                {/* MAIN CONTENT*/}
                <div className="max-w-full flex mt-10 mb-7">
                    <h1 className="w-full text-center text-3xl font-semibold  ">Blog Post</h1>
                </div>

                <div className="grid grid-cols-12 gap-4">

                    {/* list post */}
                    <div className="col-span-10 ">
                        <div className="mt-7">
                            <h2 className="text-2xl font-semibold">Fashion Trends You Need to Follow</h2>
                        </div>
                        <section className="flex flex-row text-gray-400 text-base">
                            <div className="mr-3 mt-2">
                                <i className="mr-1 far fa-calendar-alt"></i>
                                <span>August 27, 2020</span>
                            </div>
                            <Link> <span className="block mx-3 mt-2 hover:text-green-300">by John Smith</span> </Link>
                            <Link className="mx-3 mt-2 hover:text-green-300 block">
                                <i className="mr-1 far fa-comment-dots"></i>
                                <span>15 Comments</span>
                            </Link>
                        </section>
                        <div className="mt-6">
                            <img className="w-full object-cover" src={blogPost2} alt="" />
                        </div>

                        {/* content */}
                        <div className="text-base leading-6 text-justify ">

                            <p className="mt-7">
                                {`But I must explain to you how all this mistaken idea of denouncing pleasure and 
                    praising pain was born and I will give you a complete account of the system, 
                    and expound the actual teachings of the great explorer of the truth, 
                    the master-builder of human happiness. No one rejects, dislikes, 
                    or avoids pleasure itself, because it is pleasure, but because those who do not know 
                    how to pursue pleasure rationally encounter consequences that are extremely painful. 
                    Nor again is there anyone who loves or pursues or desires to obtain pain of itself, 
                    because it is pain, but because occasionally circumstances occur in which toil and 
                    pain can procure him some great pleasure.`}
                            </p>

                            <p className="mt-4">
                                {`To take a trivial example, which of us ever undertakes laborious physical exercise, 
                        except to obtain some advantage from it? But who has any right to find fault with a man 
                        who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids
                         a pain that produces no resultant pleasure On the other hand, we denounce with righteous
                          indignation and dislike men who are so beguiled and demoralized by the charms of pleasure 
                          of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are 
                          bound to ensue; and equal blame belongs to those who fail in their duty through weakness 
                          of will, which is the same as saying through shrinking from toil and pain.`}
                            </p>
                            <p className="mt-4">
                                {`These cases are perfectly simple and easy to distinguish. In a free hour, when our power
                         of choice is untrammelled and when nothing prevents our being able to do what we like best, 
                         every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing
                          to the claims of duty or the obligations of business it will frequently occur that pleasures 
                          have to be repudiated and annoyances accepted. The wise man therefore always holds in these 
                          matters to this principle of selection: he rejects pleasures to secure other greater pleasures,
                           or else he endures pains to avoid worse pains`}
                            </p><br />

                            <div className="flex  relative bg-gray-100  text-green-300 text-3xl font-medium italic my-7">

                                <blockquote className="  pl-10 py-10 pr-24 addDouble">
                                    <p>
                                        {`"But in certain circumstances and owing to the claims of duty or obligations of business
                                    it willfrequently occur that pleasures have to be repudiated and annoyances accepted."`}
                                    </p>
                                    <div className=" mt-4">
                                        <Link className="text-xl not-italic text-black hover:underline" to="/">Jon Cock</Link>
                                    </div>
                                </blockquote>

                            </div>

                            <p className="mt-4">
                                {`But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                         pain was born and I will give you a complete account of the system, and expound the actual
                          teachings of the great explorer of the truth, the master-builder of human happiness. 
                          No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, 
                          but because those who do not know how to pursue pleasure rationally encounter consequences 
                          that are extremely painful. Nor again is there anyone who loves or pursues or 
                          desires to obtain pain of itself, because it is pain, but because occasionally circumstances 
                          occur in which toil and pain can procure him some great pleasure.
                        `}
                            </p>

                            <div className="mt-4">
                                <div className="w-full flex ">
                                    <img className="block w-3/6 pr-4" src={blogPost4} alt="/" />
                                    <p className="pl-4">
                                        {`No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, 
                                but because those who do not know how to pursue pleasure rationally encounter. 
                                But I must explain to you how all this mistaken idea of denouncing pleasure 
                                and praising pain was born and I will give you a complete account of the system, 
                                and expound the actual teachings of the great explorer of the truth, the master-builder 
                                of human happiness.
                                `}
                                    </p>
                                </div>
                            </div>
                            <p className="mt-4">
                                {`Consequences that are extremely painful. Nor again is there anyone who loves or pursues 
                        or desires to obtain pain of itself, because it is pain, but because occasionally circumstances
                         occur in which toil and pain can procure him some great pleasure.
                        `}
                            </p>
                            <p className="mt-4">
                                {`But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                         pain was born and I will give you a complete account of the system, and expound the actual
                          teachings of the great explorer of the truth, the master-builder of human happiness. 
                          No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because 
                          those who do not know how to pursue pleasure rationally encounter consequences that are 
                          extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain
                           of itself.
                        `}
                            </p>
                        </div>


                        <div className="mt-10">
                            <ul>
                                <li className="btn mr-1 uppercase mb-1 text-sm bg-gray-100 hover:bg-green-300 hover:text-white">
                                    <Link className="hover:text-white" to="/jeans">JEANS</Link>
                                </li>
                                <li className="btn mr-1 uppercase mb-1 text-sm bg-gray-100 hover:bg-green-300 hover:text-white">
                                    <Link className="hover:text-white" to="/hand bags">HAND BAGS</Link>
                                </li>
                                <li className="btn mr-1 uppercase mb-1 text-sm bg-gray-100 hover:bg-green-300 hover:text-white">
                                    <Link className="hover:text-white" to="/hand bags">seiko</Link>
                                </li>
                                <li className="btn mr-1 uppercase mb-1 text-sm bg-gray-100 hover:bg-green-300 hover:text-white">
                                    <Link className="hover:text-white" to="/hand bags">banati</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-10">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="block text-2xl font-semibold " >Related Posts</h2>
                                <div className="">
                                    <button className="bg-gray-50 text-lg px-1 mr-2 hover:text-green-300 hover:bg-black" onClick={previous}>
                                        <i className=" fas fa-chevron-left"></i>
                                    </button>
                                    <button className="bg-gray-50 text-lg px-1 hover:text-green-300 hover:bg-black" onClick={next}>
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

                        <div className="mt-10">
                            <h2 className="text-2xl font-semibold ">Post Comments</h2>
                            <div className="mt-7/30">
                                <ul className="cmtList">
                                    <li className="flex ">
                                        <div className="px-3/12">
                                            <div className="w-110">
                                                <img className="rounded-full" src={logoUser} alt="/" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col px-3/12">
                                            <div className="">
                                                <div className="text-xs text-gray-400">
                                                    <i className="mr-1 far fa-calendar-alt"></i>
                                                    <span>August 27, 2020</span>
                                                </div>
                                                <h3 className="mt-1 text-18 text-base font-medium">Miles Black</h3>
                                                <p className="mt-3">
                                                    {`Well how fantastic do I feel now. Awesome to say the least. 
                                                The customer service was outstanding, being on the larger side
                                                 I am very self conscious, your team of beautiful kind-hearted
                                                  ladies made me feel very special. I actually found two wonderful
                                                   outfits and couldn't be any happier.
                                                `}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-2xl font-semibold mb-4">Leave Your Comment</h2>
                            <form >
                                <div className="w-full mt-2 grid grid-cols-2 gap-4 mb-4" >
                                    <div className="col-span-1 ">
                                        <input className="border-1 rounded px-3 py-3 w-full  focus:border-red-300 outline-none bg-gray-50 " placeholder="Name" type="text" />
                                    </div>
                                    <div className="col-span-1">
                                        <input className="border-1 rounded px-3 py-3 w-full  focus:border-red-300 outline-none bg-gray-50 " placeholder="Email" type="text" />
                                    </div>
                                </div>
                                <div className="w-full mb-3">
                                    <textarea className="w-full h-52 px-3 py-3 border-1 rounded focus:border-red-300 outline-none bg-gray-50" placeholder="Message" name="txtarea" type="text" />
                                </div>
                                <button className="bg-green-300 text-white unpercase text-base font-normal px-2 py-2 rounded mb-20 hover:bg-black" type="button" >SUBMIT COMMENT</button>
                            </form>
                        </div>
                    </div>

                    {/* SIDE BAR */}
                    <PostAside />

                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        posts: state.Posts,
    }
}
export default connect(mapStateToProps, null)(PostPage);




