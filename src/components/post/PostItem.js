import {Link} from 'react-router-dom';


function PostItem(props) {

    const { post, match } = props;
    let url = match.url
    console.log('match_PostItem', match.url);
    const { name, time, image } = post;

    const handlePostPage = (post) =>{
        
    }

    return (
        <li className="bg-gray-100 w-full flex flex-row mt-7">
            <div className="">
                <img className="w-full h-full" src={image} alt="imagePost"></img>
            </div>
            <div className="pl-7 py-12 pr-11 ">
                <div className="flex flex-row text-xs">
                    <div className="mx-2">
                        <i className="mr-1 far fa-calendar-alt"></i>
                        <span>{time}</span>
                    </div>
                    <div className="mx-2">
                        <i className="mr-1 far fa-comment-dots"></i>
                        <span>{post.comments.length} comments</span>
                    </div>
                </div>
                <Link onClick={(post)=>handlePostPage(post)} to={`${url}/${name}`}>
                    <h2 className="text-2xl font-medium">{name}</h2>
                </Link>
                <p className="mt-3">
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                             Ut enim ad minim veniam, quis nostrud exercitation ullamco`}
                </p>
                <button className=" bg-green-400 text-white hover:bg-black uppercase text-sm font-bold rounded p-1 py-2 leading-4  mt-4">
                    <Link to={`${url}/${name}`}>Read More</Link>
                </button>
            </div>
        </li>
    )
}

export default PostItem;





