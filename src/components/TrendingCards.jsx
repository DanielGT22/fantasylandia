import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Spinner } from 'react-bootstrap';

const TrendingCards = () => {
  const [trendingCards, setTrendingCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingCards = async () => {
      try {
        const response = await fetch('https://api.cardmarket.com/ws/v2.0/output.json/trending', {
          headers: {
            'Authorization': `Bearer YOUR_API_KEY` // Replace with your actual API key
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setTrendingCards(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchTrendingCards();
  }, []);

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container className="my-4">
      <Row>
        {trendingCards.map((card, index) => (
          <Col sm={12} md={6} lg={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={card.image} alt={card.name} />
              <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TrendingCards;
