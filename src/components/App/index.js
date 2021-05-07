/* eslint-disable react/prefer-stateless-function */
// == Import npm
import React from 'react';

// == Import
import './styles.css';
import Amount from '../Amount';
import Currencies from '../Currencies';
import Header from '../Header';
import Toggler from '../Toggler';

import currenciesList from '../../data/currencies';

class Converter extends React.Component {
  state = {
    opened: true,
    baseAmount: 1,
    selectedCurrency: 'United States Dollar',
    filter: '',
  }

  componentDidMount() {
    this.updatePageTitles();
    document.addEventListener('keyup', (evt) => {
      if (evt.key === 'Escape') {
        this.toggle();
      }
    });
  }

  componentDidUpdate() {
    this.updatePageTitles();
  }

  // eslint-disable-next-line react/sort-comp
  updatePageTitles() {
    const { selectedCurrency } = this.state;
    document.title = `Euros ->${selectedCurrency}`;
  }

  toggle = () => {
    console.log(this.state);
    // STRICTEMENT INTERDIT
    // this.state = { opened: false }
    // Je vais plutôt utiliser la méthode que React
    // me fourni pour le modifier
    // Cette méthode attend que je lui donne un objet
    // Et React va automatiquement prendre tout le contenu
    // de cet objet pour aller écraser le state original
    this.setState({
      opened: !this.state.opened,
    });
  }

  // eslint-disable-next-line arrow-body-style
  calculate = () => {
    const { baseAmount, selectedCurrency } = this.state;
    const currencyObject = currenciesList.find(
      (currencyInArray) => currencyInArray.name === selectedCurrency,
    );
    return parseFloat((baseAmount * currencyObject.rate), 10).toFixed(2);
  }

  changeBaseValue = (newBaseValue) => {
    this.setState({ baseAmount: newBaseValue });
  }

  changeCurrencyValue = (newCurrencyValue) => {
    this.setState({ selectedCurrency: newCurrencyValue });
  }

  handleFilterChange = (textInput) => {
    this.setState({
      filter: textInput,
    });
  }

  render() {
    // Je récupère ce qui se trouve dans this.state.opened
    const {
      opened, baseAmount, selectedCurrency, filter,
    } = this.state;

    const filteredCurrencies = currenciesList.filter(
      (currencyObject) => currencyObject.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
      <div className="converter">
        <Header baseAmount={baseAmount} onInputChange={this.changeBaseValue} />
        <Toggler open={opened} toggle={this.toggle} />
        {
          opened && (
          <Currencies
            filterText={filter}
            selectedCurrency={selectedCurrency}
            currenciesList={filteredCurrencies}
            onCurrencyClick={this.changeCurrencyValue}
            onFilterChange={this.handleFilterChange}
          />
          )
        }
        <Amount value={this.calculate()} currency={selectedCurrency} />
      </div>
    );
  }
}

// == Export
export default Converter;
