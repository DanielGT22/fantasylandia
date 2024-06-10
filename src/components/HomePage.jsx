// src/components/HomePage.js

import React from 'react';
import Header from './Header';
import Header2 from './Header2';
import Footer from './Footer';
import ProductSection from './ProductSection';
import SponsorSection from './SponsorSection';
import { Col, Row } from 'react-bootstrap';

function HomePage() {
  return (
    <div>
      <Header />
      <Header2 />
      <main>
        <Row>
          <Col sm={12} md={8}>
            <ProductSection />
          </Col>
          <Col sm={12} md={4}>
            <SponsorSection />
          </Col>
        </Row>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
