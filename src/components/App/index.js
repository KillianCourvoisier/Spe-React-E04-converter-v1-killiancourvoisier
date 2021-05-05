// == Import npm
import React from 'react';

// == Import
import './styles.css';
import Amount from '../Amount';
import Currencies from '../Currencies';
import Header from '../Header';

import currenciesList from '../../data/currencies';

// == Composant
const Converter = () => (
  <div className="converter">
    <Header baseAmount={1} />
    <Currencies currenciesList={currenciesList} />
    <Amount value={1.09} currency="United States Dollar" />
  </div>
);

// == Export
export default Converter;
