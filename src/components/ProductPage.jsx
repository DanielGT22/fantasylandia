import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

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

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <Container className="my-4">
      <Row>
        <Col md={6}>
          <Card.Img variant="top" src={product.image} />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <h3>{product.price}</h3>
          <Button variant="primary">Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
