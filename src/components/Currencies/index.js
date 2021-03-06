import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import TestLifeCycle from '../TestLifeCycle';

const Currencies = ({
  currenciesList, onCurrencyClick, selectedCurrency, onFilterChange, filterText,
}) => (
  <div className="currencies">
    <div className="currencies-title">
      <TestLifeCycle />
      <input
        type="text"
        className="currencies-search "
        placeholder="Filtrer les devises"
        value={filterText}
        onChange={(evt) => {
          const textInput = evt.target.value;
          onFilterChange(textInput);
        }}
      />
    </div>
    <ul className="currencies-list">
      {
        currenciesList.map((currencyObject) => (
          <li
            key={currencyObject.name}
            className={currencyObject.name === selectedCurrency ? 'currency currency--active' : 'currency'}
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
  selectedCurrency: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
};

export default Currencies;
