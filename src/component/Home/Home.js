import React from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';

import './Home.css'

const Home = () => {
    return (
        <div>
            
            <Container>
            <Row>
           
            <h1 className='Title'> Welcome to my book Shop</h1>
            <h1 className='Title'> Welcome to my book Shop</h1>
    <Col xs={6}><p>Léman Manhattan is an international learning community committed to educating, empowering, and inspiring students from early childhood through 12th Grade to become confident, independent critical thinkers ready to take on the world.

Contact our admissions team today to schedule a campus visit and learn about enrollment for the 2022-2023 school year.</p></Col>

    <Col xs={6}></Col>
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
<Button > See All Reviews</Button>
            </div>
        </div>
    );
};

export default Home;