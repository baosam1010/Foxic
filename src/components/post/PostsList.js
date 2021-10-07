import React from 'react';
// import { Posts } from '../../constants/Products';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function PostsList(props) {

    
    const {posts} = props;
    // console.log('post:', posts)
    const showPost = (post) => {
        let xhtml = null;
        xhtml = (
            <li key={post.id} className=" text-center">
                <Link className="w-full h-auto overflow-hidden block " to="/stub">
                    <img className="transform hover:scale-105 " src={post.image} alt="post1" />
                </Link>
                <h3 className="w-full text-xl font-semibold mt-4">
                    <Link to={`/ourpost/${post.name}`}>
                        {post.name}
                    </Link>
                </h3>
                <p className="">
                    <i className="far fa-calendar-alt"></i> {post.time}
                </p>
            </li>
        )
        return xhtml;
    };

    return (
        <div className="max-w-7xl m-auto ">
            <div className="mx-4 flex flex-wrap ">
                <h2 className="w-full text-center text-3xl font-medium mt-8 mb-8">
                    <Link to="/ourpost">Latest From Blog</Link>
                </h2>
                <ul className="w-full grid grid-cols-3 gap-4">
                    {posts.map((post) => showPost(post))}
                </ul>

            </div>

        </div>
    )
}


const mapStateToProps = (state)=>{
    return{
        posts: state.Posts
    }
}

export default connect(mapStateToProps,null)(PostsList);
