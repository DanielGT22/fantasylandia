// src/components/ProductSection.js

import React from 'react';
import { Container, Row, Col, Form, Button, Card, Carousel } from 'react-bootstrap';

const products = [
  {
    image: 'https://via.placeholder.com/150',
    name: 'Product 1',
    title: 'Title 1',
    description: 'This is a description for product 1.',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Product 2',
    title: 'Title 2',
    description: 'This is a description for product 2.',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Product 3',
    title: 'Title 3 ',
    description: 'This is a description for product 2.',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Product 4',
    title: 'Title 4',
    description: 'This is a description for product 2.',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Product 4',
    title: 'Title 4',
    description: 'This is a description for product 2.',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Product 4',
    title: 'Title 4',
    description: 'This is a description for product 2.',
  },


  // Add more products as needed
];

const ads = [
  {
    image: 'https://via.placeholder.com/300x150',
    title: 'Ad 1',
  },
  {
    image: 'https://via.placeholder.com/300x150',
    title: 'Ad 2',
  },
  {
    image: 'https://via.placeholder.com/300x150',
    title: 'Ad 3',
  },
  {
    image: 'https://via.placeholder.com/300x150',
    title: 'Ad 4',
  },
  {
    image: 'https://via.placeholder.com/300x150',
    title: 'Ad 5',
  },
  // Add more ads as needed
];

const ProductSection = () => {
  return (
    <Container className=''>
      <Row className="my-4">
        <Col className=''>
          <Form className='border border-danger border-3 rounded rounded-pill overflow-hidden'>
            <Form.Control type="text" placeholder="Search for products..." />
          </Form>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
        <Row className=''>
             {products.map((product, index) => (
        <Col key={index} sm={6} md={4}>
        <Card className=" mb-2 border-3 " >
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{product.title}</Card.Subtitle>

          <Button className='' variant="primary">Add to Cart</Button>
               </Card.Body>
             </Card>
           </Col>
              ))}
            </Row>
          
        </Col>
        <Col md={4}>
        <Row>
          <Carousel>
            {ads.map((ad, index) => (
              <Carousel.Item key={index}>
                -<img className="d-block w-100" src={ad.image} alt={ad.title} />
                <Carousel.Caption>
                  <h5>{ad.title}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
          </Row>
          <Row className='mt-3'>
             <h3> Le notizie di oggi</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductSection;
