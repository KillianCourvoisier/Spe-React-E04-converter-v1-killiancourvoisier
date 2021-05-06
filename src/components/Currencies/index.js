import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Currencies = ({ currenciesList, onCurrencyClick }) => (
  <div className="currencies">
    <div className="currencies-title">
      Currencies
    </div>
    <ul className="currencies-list">
      {
        currenciesList.map((currencyObject) => (
          <li
            key={currencyObject.name}
            className="currency"
            onClick={() => {
              onCurrencyClick(currencyObject.name);
            }}
          >
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
  onCurrencyClick: PropTypes.func.isRequired,
};

export default Currencies;
