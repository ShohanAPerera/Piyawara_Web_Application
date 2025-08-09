import PostListItem from "./PostListItem"
import Image from "./Image";
import { Link } from "react-router-dom";


const PostList = () => {
  return (
    <div className='flex flex-col gap-12 mb-8'>
    <PostListItem/>
    <PostListItem/>
    <PostListItem/>
    <PostListItem/>
    <PostListItem/>
    <PostListItem/>
    <PostListItem/>
    <PostListItem/>
    <PostListItem/>
    <PostListItem/> 
    </div>
  )
}

export default PostList