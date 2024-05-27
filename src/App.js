
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductSection from './components/ProductSection';

import './fontawesome';

function App() {
  return (
    <div>
      <Header />
      <main>
      <ProductSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
