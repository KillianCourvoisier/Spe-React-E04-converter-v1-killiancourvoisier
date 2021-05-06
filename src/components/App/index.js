/* eslint-disable react/prefer-stateless-function */
// == Import npm
import React from 'react';

// == Import
import './styles.css';
import Amount from '../Amount';
import Currencies from '../Currencies';
import Header from '../Header';

import currenciesList from '../../data/currencies';
import Toggler from '../Toggler';

class Converter extends React.Component {
  state = {
    opened: true,
    baseAmount: 1,
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

  calculate = () => this.state.baseAmount * 1.09

  render() {
    // Je récupère ce qui se trouve dans this.state.opened
    const { opened, baseAmount } = this.state;
    return (
      <div className="converter">
        <Header baseAmount={baseAmount} />
        <Toggler open={opened} toggle={this.toggle} />
        {
          opened && <Currencies currenciesList={currenciesList} />
        }
        <Amount value={this.calculate()} currency="United States Dollar" />
      </div>
    );
  }
}

// == Export
export default Converter;
