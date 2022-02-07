import React,{useState,useEffect} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Posts from '../Posts/Posts';
import ApForm from '../Form/ApForm';

import { getPosts } from '../../actions/posts';
import { useDispatch } from 'react-redux';

const Home = ()=>{
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  });
 
    return (
        <Container>
            <Row>
                <Col xs={8}><Posts setCurrentId={setCurrentId}/></Col>
                <Col xs={4}><ApForm currentId={currentId} setCurrentId={setCurrentId} /></Col>
            </Row>
        </Container>
    )
}

export default Home;