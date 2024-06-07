
import React from 'react';
import Header from './components/Header';
import Header2 from './components/Header2';

import Footer from './components/Footer';
import ProductSection from './components/ProductSection';

import './fontawesome';
import SponsorSection from './components/SponsorSection';
import { Col, Row } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Header />
      <Header2 />
      <main>
      <Row>
        <Col sm={12} md={8}>
        <ProductSection />
        </Col>
        
        <Col sm={12} md={3} className=''>
        <SponsorSection/>
        </Col>
      </Row>
      
      </main>
      <Footer />
    </div>
  );
}

export default App;
