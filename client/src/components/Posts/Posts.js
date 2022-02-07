import React from 'react';
import Post from './Post/Post';
import './Posts.css';
import { useDispatch,useSelector } from 'react-redux';

const Posts = ({setCurrentId}) =>{
    const posts = useSelector((state) => state.posts);
    console.log('posts ==>',posts);
    return (
        <>
           <div className='post__parent'>
            {posts.map( (post)=>(
                <Post post={post} key={post._id} setCurrentId={setCurrentId}/>
            ))}
           </div>
        </>
    )
}
export default Posts;