import React from 'react';
import {Card,Button} from 'react-bootstrap';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import {deletePost,likePost} from '../../../actions/posts';


const Post = ({post,setCurrentId}) =>{
    console.log('post',post);
    const dispatch = useDispatch();

    const deleteHandler = (id)=>{
        console.log('deleteHandler');
        console.log('id ==>',id);
        dispatch(deletePost(id));
    }

    const likeHandler = (id) =>{
        console.log('likeHandler');
        console.log('id ==>',id);
        dispatch(likePost(id));
    }

    return (
        <div className='post_child'>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={post.selectedFile} />
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                    {post.message}
                    </Card.Text>

                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <Button variant="default" style={{display:'flex'}}  onClick={ ()=>likeHandler(post._id) }><ThumbUpIcon/> &nbsp;Like {post.likeCount}</Button>
                        <div style={{display:'flex'}}>
                            <Button size="sm" variant="primary" onClick={ ()=>setCurrentId(post._id) }><EditIcon/> </Button>
                            <Button size="sm" variant="danger" onClick={ ()=>deleteHandler(post._id) }><DeleteIcon/> </Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
        
    );
}

export default Post;