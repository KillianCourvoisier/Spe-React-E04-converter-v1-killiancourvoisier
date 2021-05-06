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
    prenom: 'tata',
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

  render() {
    // Je récupère ce qui se trouve dans this.state.opened
    const { opened } = this.state;
    return (
      <div className="converter">
        <Header baseAmount={1} />
        <Toggler open={opened} toggle={this.toggle} />
        {
          opened && <Currencies currenciesList={currenciesList} />
        }
        <Amount value={1.09} currency="United States Dollar" />
      </div>
    );
  }
}

// == Composant
// const Converter = () => (
//   <div className="converter">
//     <Header baseAmount={1} />
//     {
//       true && <Currencies currenciesList={currenciesList} />
//     }

//     <Amount value={1.09} currency="United States Dollar" />
//   </div>
// );

// == Export
export default Converter;
