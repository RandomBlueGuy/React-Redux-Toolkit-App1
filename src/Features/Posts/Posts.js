import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPosts,
  POSTS_SUCCESS,
  POSTS_LOADING,
  POSTS_ERROR,
} from "./postsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const postsArr = useSelector((state) => state.postsSlice.postsArr);
  const loading = useSelector((state) => state.postsSlice.loading);
  const error = useSelector((state) => state.postsSlice.error);

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  console.log("postsArr:", postsArr);
  console.log("loading:", loading);
  console.log("error:", error);

  if (loading) {
    return (
      <div className='post-ctn'>
        <h3>(FAKE)Loading...</h3>
        <p className="">...will only take 2 secs</p>
      </div>
    );
  }

  if (error) {
    return 
    <div className="post-ctn"><h3>{error}</h3></div>
    
  }

  return (
    <div className='main-ctn'>
      <h4>... This is just a random assortment of POSTS</h4>

      {postsArr.map((post, index) => {
        return (
          <div className='post-ctn'>
            <h3>
              Post {post.id}: {post.title}
            </h3>
            <p className="">{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
