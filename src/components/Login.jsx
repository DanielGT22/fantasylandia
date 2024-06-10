import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Add login logic here
    console.log('Login', { email, password });
  };

  return (
    <Container
      className="d-flex  justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <Row className="w-100 justify-content-center">
      <Col md={2}></Col>
      <Col sm={12} md={4} className="text-center text-white bg-danger p-5">
          <h2>Welcome!</h2>
          <hr></hr>
          <br></br>
         <h5>Join us for a journey though the world of Fantasy! </h5>
         <br></br>
         <button className='btn border-white border-2 rouned rounded-pill text-white px-4'><strong>Sign-Up</strong></button>
        </Col>
        <Col sm={12} md={4} className="text-center  p-5">
          <h2>Login</h2>
          <hr></hr>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              
              <Form.Control className='border border-4 rounded rounded-pill'
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword ">
              <Form.Label></Form.Label>
              <Form.Control className='border border-4 rounded rounded-pill'
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
            className='btn border-primary border-2 rouned rounded-pill text-primary bg-white  px-4 mt-3'
            variant="primary" type="submit">
              <strong>Login</strong>
            </Button>
          </Form>
        </Col>
        <Col md={2}></Col>

      </Row>
    </Container>
  );
};

export default Login;
