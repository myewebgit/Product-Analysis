import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    const showAllReview = () =>{
        navigate('/Reviews');
    }
    return (
        <div>
          
            <Container>
            <Row>  
            <h1 className='Title'> Welcome to My Book Shop</h1>
            <h1 className='Title'> Welcome to Our Book Shop</h1>
    <Col xs={6}><p>Unlimited Wholesale and Retail Availability. Submit Your Manuscript Today! Hardback covers available. 100% net royalties. Personalized service. Services: paperbacks, hardbacks, ebooks, custom illustrations, worldwide distribution, one-click packages.</p>
<p>Full-service publishing for print and/or e-books
Hardback and paperback options available
Fast, easy process for publishing and marketing
Receive your free, power-packed Publishing Kit instantly!!!</p></Col>


    <Col xs={6}>
    </Col>
  </Row>
            </Container>
            <Button className='btn'> Know More</Button>
            <div>
                <h1> Customer Reviews</h1>
                
<div>
<div class="row row-cols-1 row-cols-md-2 g-4 m-5">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Robert Brown</h5>
        <p class="card-text"><p class="fs-5 fw-bold">Reviewer's Comment:</p>
              <p> This is just AWESOME!!!!! My book Shop alwayes provide informative and contemporary items, and classical as well.</p>
          <h6>Rattings: 5</h6>
        .</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">John Morrish</h5>
        <p class="card-text"><p class="fs-5 fw-bold">Reviewer's Comment:</p>
              <p> I bought a new book from "My Book Shop" ; That's imprasive............</p>
          <h6>Rattings: 5</h6>
        .</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"> Michele Balak</h5>
        <p class="card-text"><p class="fs-5 fw-bold">Reviewer's Comment:</p>
              <p> This is just AWESOME!!!!! I am great fan this book shop for last 10 years</p>
          <h6>Rattings: 5</h6>
        .</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Jony John</h5>
        <p class="card-text"><p class="fs-5 fw-bold">Reviewer's Comment:</p>
              <p> This is just AWESOME!!!!! My book Shop is a popular place for reading items .</p>
          <h6>Rattings: 5</h6>
        .</p>
      </div>
    </div>
  </div>
 
</div>
</div>
<Button onClick={showAllReview}> See All Reviews</Button>
            </div>
        </div>
    );
};

export default Home;