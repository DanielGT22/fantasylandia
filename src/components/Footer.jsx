
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-lg-start ">
      <Container className="p-4 ">
        <Row>
          <Col lg={3} md={6} className="mb-4 mb-md-0"></Col>
          <Col lg={3} md={6} className="mb-4 mb-md-0 text-center ">
            <ul className="list-unstyled mb-0 " >
              <li className='mb-2'>
                <a href="#!" className="text-secondary  ">Lavora con noi</a>
              </li>
              <li className='mb-2'>
                <a href="#!" className="text-secondary  ">Trieste via 30 Ottobre</a>
              </li>
              <li className='mb-2'>
                <a href="#!" className="text-secondary  ">Vendi da noi</a>
              </li>
              <li className='mb-2'>
                <a href="#!" className="text-secondary  ">Ordina online</a>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-md-0  text-center">
        
            <ul className="list-unstyled mb-0">
              <li className='mb-2'>
                <a href="#!" className="text-secondary  ">Facebook</a>
              </li>
              <li className='mb-2'>
                <a href="#!" className="text-secondary  ">Instagram</a>
              </li>
              <li className='mb-2'>
                <a href="#!" className="text-secondary  ">X</a>
              </li>
              <li className='mb-2'>
                <a href="#!" className="text-secondary  ">Youtube</a>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-md-0"></Col>
        </Row>
      </Container>
      <hr  className='text-white p-0'/>
      <div className="text-center p-3 bg-dark text-white">
        © 2024 Copyright <br></br>
        <a className="text-white" href="https://yourwebsite.com/"> fantasylandia.com</a>
      </div>
    </footer>
  );
};

export default Footer;
