
import React from 'react';
import { Container, Row, Col, Form, Button, Card, Carousel } from 'react-bootstrap';
import festeggia from "../img/30Anni.png"
import primaFilla1 from "../img/PrimaFilla/funko.jpg"
import primaFilla2 from "../img/PrimaFilla/mtgkamigawa.jpg"
import primaFilla3 from "../img/PrimaFilla/mtgkamigawa.jpg"
import primaFilla4 from "../img/PrimaFilla/MTG la guerra.jpg"
import primaFilla5 from "../img/PrimaFilla/mtgnuova.jpg"
import { Link } from 'react-router-dom';




const products = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    name: 'Product 1',
    title: 'Title 1',
    description: 'This is a description for product 1.',
    price: '$10.00'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    name: 'Product 2',
    title: 'Title 2',
    description: 'This is a description for product 2.',
    price: '$20.00'
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    name: 'Product 3',
    title: 'Title 3 ',
    description: 'This is a description for product 3.',
    price: '$30.00'
  },

  {
    id: 4,
    image: 'https://via.placeholder.com/150',
    name: 'Product 4',
    title: 'Title 4',
    description: 'This is a description for product 4.',
    price: '$10.00'
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/150',
    name: 'Product 5',
    title: 'Title 5',
    description: 'This is a description for product 5.',
    price: '$20.00'
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/150',
    name: 'Product 6',
    title: 'Title 6 ',
    description: 'This is a description for product 6.',
    price: '$30.00'
  },

  // Add more products as needed
];

const ads = [
  {
    image: "https://via.placeholder.com/400",
    title: 'primaFilla1',
  },
  {
    image: "https://via.placeholder.com/400",
    title: 'Ad 2',
  },
  {
    image: "https://via.placeholder.com/400",
    title: 'Ad 3',
  },
  {
    image: "https://via.placeholder.com/400",
    title: 'Ad 4',
  },
  {
    image: "https://via.placeholder.com/400",
    title: 'Ad 5',
  }
  // Add more ads as needed
];
const primaFilla = [
  {
    image: "https://via.placeholder.com/400",
    title: 'primaFilla1',
  },
  {
    image: "https://via.placeholder.com/400",
    title: 'Ad 2',
  },
  {
    image: "https://via.placeholder.com/400",
    title: 'Ad 3',
  },
  {
    image: "https://via.placeholder.com/400",
    title: 'Ad 4',
  },
  {
    image: "https://via.placeholder.com/400",
    title: 'Ad 5',
  }
  // Add more ads as needed
];

const ProductSection = () => {
  return (
    <Container className=''>
     
     <Row className='mb-3'>
     <Col sm={12} md={12} lg={6} >
          <Carousel>
            {ads.map((ad, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100 mb-1" src={ad.image} alt={ad.title} />

              </Carousel.Item>
            ))}
          </Carousel>
          </Col>
          <Col sm={12} md={12} lg={6} >
          <Carousel>
            {primaFilla.map((ad, index) => (
              <Carousel.Item key={index}>
              <img className="d-block w-100 mb-1"  src={ad.image} alt={ad.title} />
                <Carousel.Caption>
                  {/* <h5>{ad.title}</h5> */}
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
          </Col>
          </Row>
          


      <Row>
        <Col md={12}>
        <Row className=''>
             {products.map((product, index) => (
        <Col key={index} sm={6} md={4}>
        <Card className=" mb-2 border-3 " >
        <Card.Img variant="top" src={product.image} />
        <Card.Body className='text-center'>
          <Card.Title>{product.name}</Card.Title>
          <br></br>
          <Card.Subtitle className="mb-2 text-muted">{product.title}</Card.Subtitle>
                <hr></hr>
                <Link to={`/product/${product.id}`}>
          <Button className='btn btn-light border border-danger border-2 rounded rounded-pill ' variant="primary"><strong>Add to Cart</strong></Button>
          </Link>
               </Card.Body>
             </Card>
           </Col>
              ))}
            </Row>
          
        </Col>
        
      </Row>
    </Container>
  );
};

export default ProductSection;
