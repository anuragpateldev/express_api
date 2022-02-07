import React, { useState, useEffect } from 'react';
import {Form,Button} from 'react-bootstrap';
import './ApForm.css';

import { useDispatch, useSelector } from 'react-redux';
import FileBase64 from 'react-file-base64';
import { createPost, updatePost } from '../../actions/posts';

const ApForm = ({currentId,setCurrentId}) =>{
    console.log('s ==>',currentId);
    const post  = useSelector( (state)=> currentId ? state.posts.find(p=> p._id === currentId) : null);
    console.log('ap  post ==>',post);
    const [postData, setPostData] = useState(
            { 
                creator: '', 
                title: '', 
                message: '', 
                tags: '', 
                selectedFile: '' 
            }
        );

        useEffect( ()=>{
           if(post) setPostData(post);
        },[post]);

        const dispatch = useDispatch();

        const handleSubmit = () =>{
            console.log('handleSubmit');
            if(currentId){
                dispatch(updatePost(currentId,postData));
            }else{
                dispatch(createPost(postData));
            }
            clearBtn();
        }
        
        const clearBtn = () =>{
            console.log('clearBtn');
            setCurrentId(0);
            setPostData({ 
                creator: '', 
                title: '', 
                message: '', 
                tags: '', 
                selectedFile: '' 
            });
        }
    return (
        <div className='Ap__form_wrapper'>
        <Form autoComplete='off' onSubmit={(e)=>e.preventDefault()}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Creator</Form.Label>
                <Form.Control type="text" placeholder="Enter Creator" 
                    name="creator"
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
                </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title"
                    name="title"
                    value={postData.title}
                    onChange={(e)=>setPostData({...postData,title:e.target.value})} />
                </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Message</Form.Label>
                <Form.Control type="text" placeholder="Message" 
                        name="message"
                        value={postData.message}
                        onChange={(e)=>setPostData({...postData,message:e.target.value})}/>
                </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Tags</Form.Label>
                <Form.Control type="text" placeholder="Tags (optional)" 
                    name="tags" 
                    value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value})}/>
                </Form.Group>

            <Form.Group controlId="formFileMultiple" className="mb-3">
                <FileBase64
                multiple={ false }
                onDone = {({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
            </Form.Group>

            <Button variant="primary" type="submit" style={{width:'100%',marginBottom:'10px'}} onClick={handleSubmit}>
                Submit
            </Button>
            
            <Button variant="danger" type="submit" style={{width:'100%'}} onClick={clearBtn}>
                Clear
            </Button>
        </Form>
        </div>
    )
}
export default ApForm;