
import React from 'react';
import { Container, Row, Col, Form, Button, Card, Carousel } from 'react-bootstrap';
import festeggia from "../img/30Anni.png"
import primaFilla1 from "../img/PrimaFilla/Astuccio.jpg"
import primaFilla2 from "../img/PrimaFilla/Bauletto.jpg"
import primaFilla3 from "../img/PrimaFilla/Cappellino Pikachu.jpg"
import primaFilla4 from "../img/PrimaFilla/Cappellino Snorlax.jpg"
import primaFilla5 from "../img/PrimaFilla/Carte Accademia Lotta Serie 3.jpg"




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
    image: festeggia,
    title: 'Festeggia con noi',
  },
  {
    image: festeggia,
    title: 'Ad 2',
  },
  {
    image: festeggia,
    title: 'Ad 3',
  },
  {
    image: festeggia,
    title: 'Ad 4',
  },
  {
    image: festeggia,
    title: 'Ad 5',
  },
  // Add more ads as needed
];
const primaFilla = [
  {
    image: primaFilla1,
    title: 'primaFilla1',
  },
  {
    image: primaFilla2,
    title: 'Ad 2',
  },
  {
    image: primaFilla3,
    title: 'Ad 3',
  },
  {
    image: primaFilla4,
    title: 'Ad 4',
  },
  {
    image: primaFilla5,
    title: 'Ad 5',
  },
  // Add more ads as needed
];

const ProductSection = () => {
  return (
    <Container className=''>
     
     <Row className='mb-3'>
     <Col sm={12} md={6} >
          <Carousel>
            {ads.map((ad, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={ad.image} alt={ad.title} />

              </Carousel.Item>
            ))}
          </Carousel>
          </Col>
          <Col sm={12} md={6} >
          <Carousel>
            {primaFilla.map((ad, index) => (
              <Carousel.Item key={index}>
              <img className="" style={{ maxWidth:"100%"}}  src={ad.image} alt={ad.title} />
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
        
      </Row>
    </Container>
  );
};

export default ProductSection;
