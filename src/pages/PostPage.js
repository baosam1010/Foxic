import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PostAside from "../components/post/PostAside";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostSlide from "../components/post/PostSlide";
import { actAddToComment } from "../action";
import { useState } from "react";
import ItemPostComment from "../components/post/ItemPostComment";
import classNames from "classnames";

function PostPage(props) {
  let dTime = new Date(Date.now());
  const { match, posts, onAddCommentPost, comments, inforAccount } = props;
  const url = match.url.slice(9);

  const [comment, setComment] = useState({
    name: "",
    img:'',
    email: "",
    username: "",
    content: "",
    postname: url,
    time: dTime.toString(),
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if(inforAccount.length > 0) {

      setComment({ ...comment, name:inforAccount[0].username, email: inforAccount[0].email });
    }else{
      setComment({ ...comment });
    }
    // console.log("commentADD:", comment);
    onAddCommentPost(comment);
  };

  const showItemComment = (comments) => {
    let result = null;

    let arrComments = comments.filter((item, index) => {
        return item.postname === url;
    })
    result = arrComments.map((item, index) => {
        return (
            <ItemPostComment key={item.content + index} comment={item} />
        )
    })

    // console.log("arrComments:",arrComments)

    return result;
  };
  return (
    <div>
      {/* BREAD CRUM */}
      <div className="bg-gray-200 ">
        <div className="max-w-7xl m-auto">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/ourpost">Our Post</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="max-w-7xl m-auto">
        {/* MAIN CONTENT*/}
        <div className="max-w-full flex mt-10 mb-7">
          <h1 className="w-full text-center text-3xl font-semibold  ">
            Blog Post
          </h1>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* list post */}
          <div className="col-span-10 ">
            <div className="mt-7">
              <h2 className="text-2xl font-semibold">{url}</h2>
            </div>
            <section className="flex flex-row text-gray-400 text-base">
              <div className="mr-3 mt-2">
                <i className="mr-1 far fa-calendar-alt"></i>
                <span>August 27, 2020</span>
              </div>
              <Link to="/">
                {" "}
                <span className="block mx-3 mt-2 hover:text-green-300">
                  by John Smith
                </span>{" "}
              </Link>
              <Link to="/ourpost" className="mx-3 mt-2 hover:text-green-300 block">
                <i className="mr-1 far fa-comment-dots"></i>
                <span>15 Comments</span>
              </Link>
            </section>
            <div className="mt-6">
              <img className="w-full object-cover" src="https://big-skins.com/frontend/foxic-html-demo/images/blog/blog-02.webp" alt="blog2" />
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
              </p>
              <br />

              <div className="flex  relative bg-gray-100  text-green-300 text-3xl font-medium italic my-7">
                <blockquote className="  pl-10 py-10 pr-24 addDouble">
                  <p>
                    {`"But in certain circumstances and owing to the claims of duty or obligations of business
                                    it willfrequently occur that pleasures have to be repudiated and annoyances accepted."`}
                  </p>
                  <div className=" mt-4">
                    <Link
                      className="text-xl not-italic text-black hover:underline"
                      to="/"
                    >
                      Jon Cock
                    </Link>
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
                  <img className="block w-3/6 pr-4" src="https://big-skins.com/frontend/foxic-html-demo/images/blog/blog-04.webp" alt="blog4" />
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
                  <Link className="hover:text-white" to="/jeans">
                    JEANS
                  </Link>
                </li>
                <li className="btn mr-1 uppercase mb-1 text-sm bg-gray-100 hover:bg-green-300 hover:text-white">
                  <Link className="hover:text-white" to="/hand bags">
                    HAND BAGS
                  </Link>
                </li>
                <li className="btn mr-1 uppercase mb-1 text-sm bg-gray-100 hover:bg-green-300 hover:text-white">
                  <Link className="hover:text-white" to="/hand bags">
                    seiko
                  </Link>
                </li>
                <li className="btn mr-1 uppercase mb-1 text-sm bg-gray-100 hover:bg-green-300 hover:text-white">
                  <Link className="hover:text-white" to="/hand bags">
                    banati
                  </Link>
                </li>
              </ul>
            </div>

            {/* Post slide Item */}
            <PostSlide posts={posts} match={match} />

            {/* Post Comment */}

            <div className="mt-10">
              <h2 className="text-2xl font-semibold ">Post Comments</h2>
              <div className="mt-7/30">
                <ul v-for="item in items" className="first:mt-7 ">
                  <li className="flex ">
                    <div className="px-3/12">
                      <div className="w-110">
                        <img className="rounded-full" src="https://big-skins.com/frontend/foxic-html-demo/images/blog/comment-author.webp" alt="usercomment" />
                      </div>
                    </div>
                    <div className="flex flex-col px-3/12">
                      <div className="">
                        <div className="text-xs text-gray-400">
                          <i className="mr-1 far fa-calendar-alt"></i>
                          <span>August 27, 2020</span>
                        </div>
                        <h3 className="mt-1 text-18 text-base font-medium">
                          Miles Black
                        </h3>
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
                  {showItemComment(comments)}
                </ul>
              </div>
            </div>

            {/* Comment form */}
            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-4">
                Leave Your Comment
              </h2>
              <form onSubmit={(e) => handleSubmitForm(e)}>
                <div className="w-full mt-2 grid grid-cols-2 gap-4 mb-4">
                  <div className={classNames(inforAccount.length> 0 ? "hidden" : "block","col-span-1 ")}>
                    <input
                      className="border-1 rounded px-3 py-3 w-full  focus:border-red-300 outline-none bg-gray-50 "
                      placeholder="Name"
                      type="text"
                      name="name"
                      required={inforAccount.length>0?false:true}
                      value={comment.name}
                      onChange={(e) =>
                        setComment({ ...comment, name: e.target.value })
                      }
                    />
                  </div>
                  <div className={classNames(inforAccount.length > 0 ? "hidden" : "block" , "col-span-1")}>
                    <input
                      className="border-1 rounded px-3 py-3 w-full  focus:border-red-300 outline-none bg-gray-50 "
                      placeholder="Email"
                      type="email"
                      required={inforAccount.length>0?false:true}
                      name="email"
                      value={comment.email}
                      onChange={(e) =>
                        setComment({ ...comment, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="w-full mb-3">
                  <textarea
                    className="w-full h-52 px-3 py-3 border-1 rounded focus:border-red-300 outline-none bg-gray-50"
                    placeholder="Message"
                    name="content"
                    type="text"
                    required
                    value={comment.content}
                    onChange={(e) =>
                      setComment({ ...comment, content: e.target.value })
                    }
                  />
                </div>
                <button
                  className="bg-green-300 text-white unpercase text-base font-normal px-2 py-2 rounded mb-20 hover:bg-black"
                  type="submit"
                >
                  SUBMIT COMMENT
                </button>
              </form>
            </div>
          </div>

          {/* SIDE BAR */}
          <PostAside />
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddCommentPost: (comment) => {
      dispatch(actAddToComment(comment));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    posts: state.Posts,
    account: state.AccountReducer,
    comments: state.Comments,
    inforAccount: state.AccountReducer
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
