// == Import npm
import React from 'react';

// == Import
import './styles.css';
import Amount from '../Amount';
import Currencies from '../Currencies';
import Header from '../Header';

// == Composant
const Converter = () => (
  <div className="converter">
    <Header />
    <Currencies />
    <Amount />
  </div>
);

// == Export
export default Converter;
