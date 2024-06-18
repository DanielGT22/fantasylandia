import React from 'react';
import { Dropdown } from 'react-bootstrap';

const ProductSection = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center my-4">
      <div className="p-2">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic-1" className='rounded-pill border border-2'>
            Manga e Fumetti
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/manga-1">One Piece</Dropdown.Item>
            <Dropdown.Item href="#/manga-2">Naruto</Dropdown.Item>
            <Dropdown.Item href="#/manga-3">Attack on Titan</Dropdown.Item>
            <Dropdown.Item href="#/manga-4">Dragon Ball</Dropdown.Item>
            <Dropdown.Item href="#/manga-5">My Hero Academia</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="p-2">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic-2" className='rounded-pill border border-2'>
            Carte e Accessori
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/carte-1">Magic the Gathering</Dropdown.Item>
            <Dropdown.Item href="#/carte-2">Yu-Gi-Oh!</Dropdown.Item>
            <Dropdown.Item href="#/carte-3">Pokémon</Dropdown.Item>
            <Dropdown.Item href="#/carte-4">Card Sleeves</Dropdown.Item>
            <Dropdown.Item href="#/carte-5">Deck Boxes</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="p-2">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic-3" className='rounded-pill border border-2'>
            DIY
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/diy-1">Gundam Models</Dropdown.Item>
            <Dropdown.Item href="#/diy-2">Warhammer 40K</Dropdown.Item>
            <Dropdown.Item href="#/diy-3">Paints and Brushes</Dropdown.Item>
            <Dropdown.Item href="#/diy-4">Model Kits</Dropdown.Item>
            <Dropdown.Item href="#/diy-5">Tools and Accessories</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="p-2">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic-4" className='rounded-pill border border-2'>
            Giochi da Tavola 
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/giochi-1">Catan</Dropdown.Item>
            <Dropdown.Item href="#/giochi-2">Ticket to Ride</Dropdown.Item>
            <Dropdown.Item href="#/giochi-3">Pandemic</Dropdown.Item>
            <Dropdown.Item href="#/giochi-4">Carcassonne</Dropdown.Item>
            <Dropdown.Item href="#/giochi-5">Risk</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="p-2">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic-5" className='rounded-pill border border-2'>
            Eventi
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/eventi-1">MtG-Standard</Dropdown.Item>
            <Dropdown.Item href="#/eventi-2">MtG-Modern</Dropdown.Item>
            <Dropdown.Item href="#/eventi-3">MtG-Pauper</Dropdown.Item>
            <Dropdown.Item href="#/eventi-4">MtG-Draft</Dropdown.Item>
            <Dropdown.Item href="#/eventi-5">MtG-Modern Horizons 3 Prerelease </Dropdown.Item>
            <Dropdown.Item href="#/eventi-6">Yu-Gi-Oh! Standard</Dropdown.Item>
            <Dropdown.Item href="#/eventi-7">Yu-Gi-Oh! Edison Format</Dropdown.Item>
            <Dropdown.Item href="#/eventi-8">Yu-Gi-Oh! Underdog Format</Dropdown.Item>
            <Dropdown.Item href="#/eventi-9">Flesh and Blood Draft</Dropdown.Item>
            <Dropdown.Item href="#/eventi-10">Star Wars Unlimited Constructed</Dropdown.Item>
            <Dropdown.Item href="#/eventi-11">Lega Pokémon</Dropdown.Item>
            <Dropdown.Item href="#/eventi-12">One Piece</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default ProductSection;
