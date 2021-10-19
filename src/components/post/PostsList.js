import React from "react";
// import { Posts } from '../../constants/Products';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Slider from "react-slick";

function PostsList(props) {
  const { posts } = props;
  // console.log('post:', posts)

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      >
        {" "}
        {`<`}
      </button>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      >{`>`}</button>
    );
  }
  const showPost = (post) => {
    let xhtml = null;
    xhtml = (
      <li key={post.id} className="showPost text-center">
        <Link
          className="w-full h-auto overflow-hidden block "
          to={`/ourpost/${post.name}`}
        >
          <img
            className="transform hover:scale-105 "
            src={post.image}
            alt="post1"
          />
        </Link>
        <h3 className="w-full text-xl font-semibold mt-4">
          <Link to={`/ourpost/${post.name}`}>{post.name}</Link>
        </h3>
        <p className="">
          <i className="far fa-calendar-alt"></i> {post.time}
        </p>
      </li>
    );
    return xhtml;
  };

  const showslide = (posts) => {
    let xhtml = null;
    xhtml = posts.map((post) => {
      return (
        <li key={post.id} className="showPost text-center">
          <Link
            className="w-full h-auto overflow-hidden block "
            to={`/ourpost/${post.name}`}
          >
            <img
              className="w-full object-cover transform hover:scale-105 "
              src={post.image}
              alt="post1"
            />
          </Link>
          <h3 className="w-full text-xl font-semibold mt-4">
            <Link to={`/ourpost/${post.name}`}>{post.name}</Link>
          </h3>
          <p className="">
            <i className="far fa-calendar-alt"></i> {post.time}
          </p>
        </li>
      );
    });
    return xhtml;
  };
  return (
    <div className="max-w-7xl m-auto ">
      <div className="mx-4 flex flex-wrap ">
        <h2 className="w-full text-center text-3xl font-medium mt-8 mb-8">
          <Link to="/ourpost">Latest From Blog</Link>
        </h2>
        <ul className="hidden w-full md:grid grid-cols-3 gap-4">
          {posts.map((post) => showPost(post))}
        </ul>
        <div className="w-full  md:hidden">
          <Slider {...settings}>{showslide(posts)}</Slider>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.Posts,
  };
};

export default connect(mapStateToProps, null)(PostsList);
