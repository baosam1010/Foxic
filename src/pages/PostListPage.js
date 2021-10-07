import { Link, useParams } from "react-router-dom";
import PostItem from './../components/post/PostItem';
import PostAside from "../components/post/PostAside";
import { connect } from "react-redux";

function PostListPage(props) {
    const { match, posts } = props;

    let { id } = useParams();
    console.log('idParams:',id)

    const showPosts = (posts) => {
        let result = null;
        result = posts.map((post, index) => {
            return (
                <PostItem
                    key={post.id}
                    post={post}
                    match={match}
                />
            )
        })
        return result;
    }
    return (
        <div className="max-w-full" >

            {/* BREAD CRUM */}
            <div className="bg-gray-200 ">
                <div className="max-w-7xl m-auto">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/ourpost">Our Post</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xl m-auto">

                {/* MAIN CONTENT*/}
                <div className="max-w-full flex mt-10 mb-7">
                    <h1 className="w-full text-center text-3xl font-semibold  ">Our Post</h1>
                </div>

                <div className="grid grid-cols-12 gap-4">

                    {/* list post */}
                    <div className="col-span-10 ">
                            <div className="">
                                <ul className="">
                                    {showPosts(posts)}
                                </ul>
                            </div>
                    </div>

                    {/* SIDE BAR */}
                        <PostAside/>

                </div>
            </div>

            {/* change page */}
            <div className="max-w-7xl m-auto">
                <div className="mt-10 mb-20">
                    <ul className="flex text-center">
                        <li className="">
                            <Link className="px-1 rounded-sm font-medium text-lg leading-6 w-8 h-8 flex items-center justify-center  bg-gray-200" to="/">1</Link>
                        </li>
                        <li >
                            <Link className="px-1 rounded-sm font-medium text-lg leading-6 w-8 h-8 flex items-center justify-center" to="/">2</Link>
                        </li>
                        <li >
                            <Link className="px-1 rounded-sm font-medium text-lg leading-6 w-8 h-8 flex items-center justify-center" to="/">3</Link>
                        </li>
                        <li >
                            <Link className="px-1 rounded-sm font-medium text-lg leading-6 w-8 h-8 flex items-center justify-center" to="/">4</Link>
                        </li>
                        <li >
                            <Link className="px-1 rounded-sm font-medium text-lg leading-6 w-8 h-8 flex items-center justify-center" to="/">5</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
const mapStateToProps= (state) => {
    return{
        posts: state.Posts,
    }
}
export default connect (mapStateToProps, null)(PostListPage);





