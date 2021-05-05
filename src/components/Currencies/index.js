import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Currencies = ({ currenciesList }) => (
  <div className="currencies">
    <div className="currencies-title">
      Currencies
    </div>
    <ul className="currencies-list">
      {
        currenciesList.map((currencyObject) => (
          <li className="currency">
            {currencyObject.name}
          </li>
        ))
      }

    </ul>
  </div>
);

Currencies.propTypes = {
  currenciesList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
  })).isRequired,
};

export default Currencies;
